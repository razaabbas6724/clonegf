<div >
<Accordion expanded={questions[i].open} className={questions[i].open ? 'add-boder' : ""}>

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
                    <Button style={{ textTransform: "none", color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
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
        <div className='question_edit'>
            <IconButton > <AddCircleOutline className='Edit' onClick={() => { addMoreQuestionField() }} />
            </IconButton>
            <IconButton > <OndemandVideo className='Edit' /></IconButton>
            <IconButton >    <CropOriginal className='Edit' /></IconButton>
            <IconButton >     <TextFields className='Edit' /></IconButton>
        </div>
    </div>

</Accordion>
</div>





// const id = uuid();
        // axios.post(`http://localhost:9000/add_question${id}`, { 
        //     "document_name": documentName,
        //     "doc_desc": documentDescription,
        //     "questions": questions
        // })