import React, { useState } from 'react'
import { CropOriginal } from '@mui/icons-material'
import { Select, MenuItem, Button, Typography, Switch, Checkbox } from '@mui/material'
import { ShortText } from '@mui/icons-material'
import { Subject } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import { BsFile, BsTrash } from 'react-icons/bs'
import { IconButton } from '@mui/material'
import { FilterNone } from '@mui/icons-material'
import { AddCircleOutline } from '@mui/icons-material'
import { OndemandVideo } from '@mui/icons-material'
import { TextFields } from '@mui/icons-material'
// import { BsFile } from 'react-icons/bs'
import { Accordion } from '@mui/material'
import { AccordionSummary } from '@mui/material'
import { AccordionDetails } from '@mui/material'
import { FcRightUp } from 'react-icons/fc'
import { Close } from '@mui/icons-material'
import { Radio } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import './Qnform.css'
import { DragIndicator } from '@mui/icons-material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios';





function Qnform() {
   
    const [questions, setQuestions] = useState([
        {

            questiontext: 'Which is your favorite color?',
            questiontype: 'radio',
            options: [
                {
                    optiontext: 'Red'
                },
                {
                    optiontext: 'Blue'
                },
                {
                    optiontext: 'Green'
                }
            ],
            answer: false,
            answerkey: '',
            open: true,
            points: 0,

            required: false
        },
        {

            questiontext: 'Which is your favorite food?',
            questiontype: 'radio',
            options: [
                {
                    optiontext: 'idly'
                },
                {
                    optiontext: 'Blue'
                },
                {
                    optiontext: 'Green'
                }
            ],
            answer: false,
            answerkey: '',
            open: true,
            points: 0,

            required: false
        }
    ]);
  
   const [documentName, setDocName] = useState('Untitled Document');
  
   const [documentDescription, setDocDesc] = useState('Add Description');
    function addQuestiontype(i, type) {

        let qs = [...questions]

        qs[i].questiontype = type;
        setQuestions(qs)
    }
    function changeQuestion(text, i) {
        var newQuestion = [...questions];
        newQuestion[i].questiontext = text;
        setQuestions(newQuestion);

    }
    function changeOptionvalue(text, i, j) {
        var optionQuestion = [...questions];
        optionQuestion[i].options[j].optiontext = text;
        setQuestions(optionQuestion)
    }
    function removeOption(i, j) {
        var removeOptionQuestion = [...questions];
        if (removeOptionQuestion[i].options.length > 1) {
            removeOptionQuestion[i].options.splice(j, 1);
            setQuestions(removeOptionQuestion)
            console.log(i, "__", j)
        }
    }
    function addOption(i) {
        var optionOfQuestion = [...questions];
        if (optionOfQuestion[i].options.length < 10) {
            optionOfQuestion[i].options.push({ optiontext: 'Option' + (optionOfQuestion[i].options.length + 1) })

        } else {
            console.log("Max 5 options")
        }
        setQuestions(optionOfQuestion)
    }

    function copyQuestions(i) {
        expandcloseAll();
        let qs = [...questions]
        var newQuestion = { ...qs[i] }
        setQuestions([...questions, newQuestion])
    }
    function deleteQuestions(i) {
        let qs = [...questions]
        if (questions.length > 1) {
            qs.splice(i, 1)
        }
        setQuestions(qs)
    }

    function requiredQuestions(i) {
        var reqQuestion = [...questions];
        reqQuestion[i].required = !reqQuestion[i].required
        console.log(reqQuestion[i].required + ' ' + i)
        setQuestions(reqQuestion)
    }

    function addMoreQuestionField() {
    
        setQuestions([...questions,
        { questiontext: "Question", questiontype: "radio", options: [{ optiontext: 'option1' }], open: true, required: false }

        ])
    }

    function onDragEnd(result) {
        if (!result.destination) return;

        var itemgg = [...questions]
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        );
        setQuestions(itemF)

    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }
    function expandcloseAll() {
        let qs = [...questions];
        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false;
        }
        setQuestions(qs);

    }

    function handleExpand(i) {
        let qs = [...questions];
        for (let j = 0; j < qs.length; j++) {
            if (j === i) {
                qs[i].open = true;
            } else {
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }
    function SetOptionAnswer(ans, qno) {
        var Questions = [...questions];
        Questions[qno].answer = ans;
        setQuestions(Questions);


    }
    function SetOptionPoint(points, qno) {
        var Questions = [...questions];
        console.log("eee" + Questions);

        Questions[qno].points = points;
        setQuestions(Questions)
        console.log(qno + " " + points);
    }
    function doneAnswer(i) {
        var Answerofquestions = [...questions];
        Answerofquestions[i].answer = !Answerofquestions[i].answer;
        setQuestions(Answerofquestions);
    }
    function addAnswer(i) {
        var Answerofquestions = [...questions];
        Answerofquestions[i].answer = !Answerofquestions[i].answer;
        setQuestions(Answerofquestions);

    }
    
    function commitToDB(){   
       const id =1;
        axios.get(`http://localhost:9000/add_question/${id}`, { 
            "document_name": documentName,
            "doc_desc": documentDescription,
            "questions": questions
        })
        
        
           
    }


    const questionUI = () =>

    (

        questions.map((ques, i) =>

        (
            <Draggable key={i}
                draggableId={i + 'id'} index={i} >
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}

                    >
                        <div >
                            <div style={{ marginBottom: '0px' }}>
                                <div style={{ width: '100%', marginBottom: '0%' }}>
                                    <DragIndicator style={{
                                        transform: "rotate(-90deg)", color: '#DAEOE2',
                                        position: 'relative', left: '300px'
                                    }} fontSize='small' />


                                    <div >
                                        <Accordion expanded={questions[i].open} onChange={() => { handleExpand(i) }} className={questions[i].open ? 'add-boder' : ""}>

                                            <AccordionSummary aria-controls='panela-content' id='panela-header' elevation={1} style={{ with: '100%' }} >
                                                {!questions[i].open ? (

                                                    <div className='saved_question'>
                                                        <Typography style={{ fontsize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24PX', paddingBottom: '8px' }}>
                                                            {i + 1}. {questions[i].questiontext}

                                                        </Typography>

                                                        {
                                                            ques.options.map((option, j) =>
                                                            // console.log(option.optiontext);
                                                            // console.log(j);                                        
                                                            (
                                                                <div key={j}>
                                                                    <div style={{ display: 'flex' }}>
                                                                        <FormControlLabel style={{ marginLeft: '5px', marginBottom: '5px' }} disabled
                                                                            control=
                                                                            {<input type={ques.questiontype} color='primary' style={{ marginRight: '3px' }} required={ques.type} />}
                                                                            label={<Typography style={{
                                                                                fontsize: '13px',
                                                                                fontWeight: '400',
                                                                                letterSpacing: '.2px',
                                                                                lineHeight: '20px',
                                                                                color: '#202124'

                                                                            }}
                                                                            >
                                                                                {ques.options[j].optiontext}
                                                                            </Typography>
                                                                            }


                                                                        />

                                                                    </div>
                                                                </div>
                                                            )
                                                            )
                                                        }

                                                    </div>
                                                ) : ""

                                                }
                                            </AccordionSummary>

                                            <div className='Questionboxes'>
                                                {questions[i].open ? (
                                                    <>
                                                    <AccordionDetails className='addQuestion'>
                                                        < div className='add_qn_top'>
                                                            <input type='text' className='Question' placeholder='Enter Question' value={ques.questiontext} onChange={(e) => { changeQuestion(e.target.value, i) }} />
                                                            <CropOriginal style={{ color: '#5f6368' }} />
                                                            <Select className='select' style={{ color: '#5f6368', fontSize: '13px' }} >
                                                                <MenuItem onClick={() => { addQuestiontype(i, 'text') }} id="text" value='text' className='menuitem' >
                                                                    <Subject style={{ marginRight: '10px' }} />Text</MenuItem>
                                                                <MenuItem onClick={() => { addQuestiontype(i, 'checkbox') }} id='checkbox' value='checkbox' className='menuitem' >
                                                                    <Checkbox style={{ marginRight: '10px' }} />Checkbox</MenuItem>

                                                                <MenuItem onClick={() => { addQuestiontype(i, 'radio') }} id='radio' value='radio' className='menuitem' >
                                                                    <Radio style={{ marginRight: '10px' }} checked />Multiple Choice</MenuItem>


                                                            </Select>
                                                        </div>
                                                        {ques.options.map((op, j) => {

                                                            return (
                                                                <div className='add_qn_body' key={j}>
                                                                    {
                                                                        (ques.questiontype !== 'text') ?

                                                                            <input type={ques.questiontype} style={{ marginRight: '10px' }} /> :
                                                                            <ShortText style={{ marginRight: '10px' }} />


                                                                    }
                                                                    <div>
                                                                        <input type='text' className='text_input' placeholder='Enter Option' value={ques.options[j].optiontext} onChange={(e) => { changeOptionvalue(e.target.value, i, j) }}></input>
                                                                    </div>
                                                                    <CropOriginal style={{ color: '#5f6368' }} />
                                                                    <IconButton aria-label="delete">
                                                                        <Close onClick={() => { removeOption(i, j) }} />
                                                                    </IconButton>
                                                                </div>
                                                            )
                                                        })



                                                        }

                                                        {
                                                            ques.options.length < 50 ? (
                                                                <div className='add_question_body'>
                                                                    <FormControlLabel disabled control=
                                                                        {(ques.questiontype !== 'text') ?
                                                                            <input type={ques.questiontype} color='primary'
                                                                                inputprops={{ 'aria-label': 'secondary checkbox' }}
                                                                                style={{ marginLeft: '10px', marginRight: '10px' }} disabled /> :
                                                                            <ShortText style={{ marginRight: '10px' }} />
                                                                        } label={<div>
                                                                            <input type='text' className='text_input' style={{ fontSize: '13px', width: '60px' }}
                                                                                placeholder='add others'></input>
                                                                            <Button onClick={() => { addOption(i) }} size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                                                                Add Option
                                                                            </Button>
                                                                        </div>}


                                                                    />


                                                                </div>
                                                            ) : ""
                                                        }
                                                        <div className="add_footer">
                                                            <div className='add_question_bottom_left'>
                                                                <Button style={{ textTransform: "none", color: '#4285f4', fontSize: '13px', fontWeight: '600' }} onClick={() => { addAnswer(i) }}>
                                                                    <FcRightUp style={{ border: "2px solid #4285f4", padding: '2px', marginrighe: '8px' }} />
                                                                    Answer Key

                                                                </Button>

                                                            </div>
                                                            <div className='add_question_bottom'>
                                                                <IconButton aria-label='Copy' onClick={() => { copyQuestions(i) }} >
                                                                    <FilterNone />
                                                                </IconButton>
                                                                <IconButton aria-label='delete' onClick={() => { deleteQuestions(i) }}>
                                                                    <BsTrash />
                                                                </IconButton>

                                                                <span style={{ color: '#5f6368', fontsize: '13px' }}>
                                                                    Required</span>
                                                                <Switch onClick={() => { requiredQuestions(i) }} name='checked' color='primary' checked={questions.required} />
                                                                <IconButton >
                                                                    <MoreVert />
                                                                </IconButton>
                                                            </div>
                                                        </div>

                                                    </AccordionDetails>


                                                    {/* edited by mine */}
                                                    <div className='question_edit'>
                                                        <IconButton > <AddCircleOutline className='Edit' onClick={() => { addMoreQuestionField() }} />
                                                        </IconButton>
                                                        <IconButton > <OndemandVideo className='Edit' /></IconButton>
                                                        <IconButton >    <CropOriginal className='Edit' /></IconButton>
                                                        <IconButton >     <TextFields className='Edit' /></IconButton>
                                                    </div>
                                                    </>
                                                    
                                                ) : (
                                                    <>
                                                        <AccordionDetails className='add_question'>
                                                            <div className='Top_header'>
                                                                Choose Question Type
                                                            </div>
                                                            <div>
                                                                <div className='add_question_top'>
                                                                    <input type='text'
                                                                        className='question'
                                                                        placeholder='Question' value={ques.questiontext} disabled />
                                                                    <input type='number' className='points' min='0' step='1' placeholder='0' onChange={(e) => { SetOptionPoint(e.target.value) }} />

                                                                </div>
                                                                {ques.options.map((op, j) => (
                                                                    <>
                                                                        <div className='add_question_body' key={j} style={{ marginLeft: '8px', marginBottom: '10px', marginTop: '5px' }}>
                                                                            <div key={j}>
                                                                                <div style={{ display: 'flex' }} className=''>
                                                                                    <div className='form_check'>
                                                                                        <label style={{ fontSize: '13px' }} onClick={() => { SetOptionAnswer(ques.options[j].optiontext, i) }}>
                                                                                            {
                                                                                                (ques.questiontype !== 'text') ?
                                                                                                    <input
                                                                                                        type={ques.questiontype}
                                                                                                        name={ques.questiontext}
                                                                                                        value='option3'
                                                                                                        className='form_check-input'
                                                                                                        required={ques.required}
                                                                                                        style={{ marginRight: '10px', marginBottom: '10px', marginTop: '5px' }}
                                                                                                    /> : <ShortText style={{ marginRight: '10px' }} />
                                                                                            }
                                                                                            {ques.options[j].optiontext}

                                                                                        </label>
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ))
                                                                }
                                                                <div className='add_question_body'>
                                                                    <Button size='small' style={{ textTransform: 'none', color: '4285f4', fontSize: '13px', fontWeight: '600' }}>
                                                                        <BsFile style={{ fontsize: '20px', marginRight: '8px' }}>Add Answer Feadback</BsFile>

                                                                    </Button>

                                                                </div>
                                                                <div className='add_question_botton'>
                                                                    <Button variant='outlined' color='primary' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }} onClick={() => { doneAnswer(i) }}>
                                                                        Done
                                                                    </Button>

                                                                </div>




                                                            </div>
                                                        </AccordionDetails>
                                                    </>)
                                                    (!ques.answer) ? (
                                                    <div className='question_edit'>
                                                        {/* <IconButton > <AddCircleOutline className='Edit' onClick={() => { addMoreQuestionField() }} />
                                                        </IconButton>
                                                        <IconButton > <OndemandVideo className='Edit' /></IconButton>
                                                        <IconButton >    <CropOriginal className='Edit' /></IconButton>
                                                        <IconButton >     <TextFields className='Edit' /></IconButton> */}
                                                    </div>
                                                ) : ''
                                                }
                                            </div>                                                                              

                                        </Accordion>
                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>
                )


                }
            </Draggable>
        )
        )
    )
    return (
        <>
            <div>
                <div className='question_form'>
                    <br></br>
                    <div className='section'>
                        <div className='question_title-section'>
                            <div className="question_form_top" >
                                <input type='text' className='question_form_top_name'
                                    style={{ color: "black" }} placeholder='Untitled Document' onChange={(e) => setDocName(e.target.value)}></input>
                                <input type='text' className='question_form_top_description'
                                    style={{ color: "black" }} placeholder='Enter description' onChange={(e) => setDocDesc(e.target.value) }></input>

                            </div>
                        </div>


                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId='droppable'>
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {questionUI()}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        <div className='save_form'>
                            <Button variant='contained' color='primary' onClick={commitToDB} style={{ fontSize: "14px" }}>Save </Button>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Qnform