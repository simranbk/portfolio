import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/cat_theme/header-img.svg";

import { useEffect, useState } from "react";
export const Banner = ()=>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    // const toRotate = ['a web developer','data scientiest','student'];
    const toRotate = ['fact-checking the universe','chasing clean data','turning bugs into features'];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*1000);
    const period = 2000;

    // used to perform side effects in functional components or like to interact with things outside of the component. like we interacted with the window size to determine if scroll was happening or not in navbar component
    //useEffect is ran after every render
    useEffect(()=>{
        let ticker = setInterval(()=>{
        //setInterval is a function in js that repeatedly calls a function in a provided time interval
        //interval in between the tick function gets called
            tick();
        },delta)
        return ()=>{clearInterval(ticker)}
        //above line is useful to prevent memory leaks or something
    },[text]) 
    // this useEffect runs everytime the text gets updated

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0,text.length-2) : fullText.substring(0,text.length + 1);
        setText(updatedText + '|');
        
        // below code not only handles the speed of typing/deleting animation it also increments the loop so after one element of toRotate array is done typing out, we move to the next
        if (isDeleting){
            // delta controls the spped but here delta is halved making the deleting process faster than typing process
            //delta controls speed because tick function is only called in delta interval :)
            setDelta(prevDelta => prevDelta/1.75)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            //here delta is set to period,ie,2000 because it takes 2000ms(2s) before it wipes out the text
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            //here is where we move to the next word in toRotate
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);

        }
    }

    return(
        <section className="banner" id="home">
            <Container>
            {/* inside container we have row and inside that we have col */}
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7} >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi I'm Simran "}<span className="wrap">{text}</span></h1>
                    <p>
                        I am a passionate computer science student with hands-on experience in web development, app development, and
                        machine learning. Through my coursework and personal projects, I have developed a solid foundation in Django,
                        React, Django Rest Framework along with Android Development using Java. Moreover, this year I’ve familiarized
                        myself with Neural Networks and customizing Large Language Models with finetuning and Retrieval Augmented
                        Generation.
                    </p>
                    <Button className="button" onClick={()=>console.log("print button")}>Lets connect <ArrowRightCircle size={25}/></Button>
                    {/* the arrow icon came from doing npm install bootstrap icon */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    {/* here xl is 5 because xl above is 7 and they add upto 12 */}
                    <img src={headerImg} alt="header image"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}