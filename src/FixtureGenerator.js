import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardTitle, Row, Table } from 'reactstrap';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import { FileText } from 'react-feather';
import moment from 'moment/moment';
const FixtureGenerator = ({ teams, mix, rematch, mirror, randomize, ghostValue, weekValue, versusValue }) => {



    let players = [
        {
            name: 'Fenerbahce',
            uid: '1'
        },
        {
            name: 'Galatasaray',
            uid: '2'
        },
        {
            name: 'Besiktas',
            uid: '3'
        }
        ,
        {
            name: 'Trabzonspor',
            uid: '4'
        },
        {
            name: 'Basaksehir',
            uid: '5'
        },
        {
            name: 'Konyaspor',
            uid: '6'
        },
        {
            name: 'Sivasspor',
            uid: '7'
        }


    ]

    //mix = false;
    //returnMatch = true;
    mirror = true;
    //players = players.reverse()
    players = teams;
    const seperator = '$$$$';

    // Find out how many teams we want fixtures for
    let numberPlayers = players.length
    let realNumberPlayers = players.length;
    // If odd number of players add a "ghost".
    let ghost = false
    if (numberPlayers % 2 == 1) {
        numberPlayers++
        ghost = true
    }

    // Generate the fixtures using the cyclic algorithm.
    let totalRounds = numberPlayers - 1
    let matchesPerRound = numberPlayers / 2
    let rounds = {}


    for (let round = 0; round < totalRounds; round++) {
        for (let match = 0; match < matchesPerRound; match++) {
            let home = (round + match) % (numberPlayers - 1)
            let away = (numberPlayers - 1 - match + round) % (numberPlayers - 1)
            // Last player stays in the same place while the others
            // rotate around it.
            if (match == 0) {
                away = numberPlayers - 1
            }
            // Add one so players are number 1 to players not 0 to players - 1
            // upon display.
            if (!rounds[round]) rounds[round] = {}
            rounds[round][match] = players[(home)]?.name + seperator + ((away + 1) === realNumberPlayers + 1 ? ghostValue : players[(away)]?.name)
        }
    }

    // Interleave so that home and away games are fairly evenly dispersed.
    //Mixed
    if (mix) {
        let interleaved = {}
        let evn = 0;
        let odd = (numberPlayers / 2)
        for (let i = 0; i < totalRounds; i++) {
            if (i % 2 == 0) {
                interleaved[i] = rounds[evn++]
            } else {
                interleaved[i] = rounds[odd++]
            }
        }
        rounds = interleaved
    }

    // Last team can't be away for every game so flip them
    // to home on odd rounds.

    for (let round = 0; round < totalRounds; round++) {
        if (round % 2 == 1 && !rounds[round][0].includes(ghostValue)) {
            rounds[round][0] = flip(rounds[round][0])
        }
    }
    function flip(match) {
        let components = match.split(seperator)
        return components[1] + seperator + components[0]
    }


    ///REVERSE
    //console.log(totalRounds);
    if (rematch) {
        let count = totalRounds;
        for (let round = 0; round < totalRounds; round++) {
            count--;
            for (let match = 0; match < matchesPerRound; match++) {
                let home = (round + match) % (numberPlayers - 1)
                let away = (numberPlayers - 1 - match + round) % (numberPlayers - 1)
                // Last player stays in the same place while the others
                // rotate around it.
                if (match == 0) {
                    away = numberPlayers - 1
                }
                // Add one so players are number 1 to players not 0 to players - 1
                // upon display.
                if (!rounds[count + totalRounds]) rounds[count + totalRounds] = {}
                rounds[count + totalRounds][match] = ((away + 1) === realNumberPlayers + 1 ? ghostValue : players[(away)]?.name) + seperator + (players[(home)].name)
                //console.log("match:", count, totalRounds, rounds[count + totalRounds][match], home, away)
            }
        }
    }

    if (randomize) {
        shuffle(rounds);
        //console.log('randomize:', randomize)
    }


    const handlePrint = () => {

        const doc = new jsPDF();
        var body = [];
        //const divider = '------------------------------------';
        // const divider = '______________________';
        const divider = '';
        Object.keys(rounds).map((key, index) => {
            let home, away;
            Object.keys(rounds[key]).map((index2) => {
                const round = rounds[key][index2].split(seperator);
                home = round[0];
                away = round[1];
                body.push({
                    home,
                    vs: versusValue,
                    away,
                    week: index + 1
                })
            })
            body.push({
                home: divider,
                vs: divider,
                away: divider,
                week: divider
            })
        })
        doc.setTextColor('#e0d7d7');
        doc.text('BF Fixture ', 14, 20);
        doc.setFontSize(10);


        const format1 = "YYYY-MM-DD HH:mm"
        var time = moment().format(format1);;
        doc.text('Created at: ' + time, 14, 25)

        doc.autoTable({
            startY: 30,
            head: [{ week: weekValue, home: 'Home', vs: versusValue, away: 'Away' }],
            body: body,
        })

        doc.save("BF-Fixture.pdf");

    }

    // const handlePrint = () => { }

    ///REVERSE
    //console.log('rounds end: ', rounds);
    //console.log('asd: ', rounds[1]);
    return (
        <div>
            {teams.length > 0 ? <Row className='mt-1'>
                <ButtonGroup>
                    <Button onClick={handlePrint} color='info'>
                        <FileText size={14} />
                        <span className='align-middle ms-25'>Export PDF</span>
                    </Button>
                </ButtonGroup>
            </Row> : ''}


            {Object.keys(rounds).map((key, index) => {
                let home, away;
                return (
                    <Card key={index}>
                        <CardBody>
                            <CardTitle style={{ display: "flex", justifyContent: "center", }}>{index + 1}. {weekValue}</CardTitle>
                            <Table striped responsive>
                                <tbody>
                                    {Object.keys(rounds[key]).map((index2) => {
                                        const round = rounds[key][index2].split(seperator);
                                        home = round[0];
                                        away = round[1]
                                        return (
                                            <tr key={index2}>
                                                <td className="text-center" style={{ width: "200px" }}>{home}</td>
                                                <td className="text-center" style={{ width: "200px" }}>{versusValue}</td>
                                                <td className="text-center" style={{ width: "200px" }}> {away}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>

                );
            })}
        </div>
    )
}

function shuffle(sourceArray) {
    let arrLength = 0;
    Object.keys(sourceArray).map((key, index) => {
        arrLength++;
    })


    for (var i = 0; i < arrLength - 1; i++) {
        var j = i + Math.floor(Math.random() * (arrLength - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }




}

FixtureGenerator.defaultProps = {
    ghostValue: 'BYE',
    weekValue: 'Week',
    versusValue: 'VS'
}

export default FixtureGenerator