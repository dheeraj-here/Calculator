import React from 'react'
import { useState } from 'react';
import './pad.css';
import Screen from '../Screen/Screen';

export default function Pad() {
    const [ques, setQues] = useState('')
    const [ans, setans] = useState('')

    function handleClick(e) {
        const val = e.target.value;

        switch (val) {
            case '=':{
                var ans='';
                if(ques !== ''){
                    try{
                        ans = eval(ques);
                    }
                    catch(e){
                        setans('Math Error')
                    }
                    if (ans === undefined) setans('Math Error');
                    else {
                        setans(ans.toString());
                        setQues('');
                    }
                    break;
                } 
                
            }

            case 'Delete': {
                let st = ques.slice(0,-1)
                setQues(st)
                break; 
            }
            case 'Clear': {
                setQues('');
                setans('')
                break;
            }

            default:{
                setQues(ques + val);
                break;
            }
        }
    }
    console.log(ques);
    console.log(ans);

  return (
    <div className='container'>
        <Screen prop={ques}/>
        <Screen prop={ans}/>

<div className='pad'>
        <button className='btn' value="Delete" onClick={handleClick}>
            Delete
        </button>
        <button className='btn' value="Clear" onClick={handleClick}>
            Clear
        </button>
        <button className='btn' value="." onClick={handleClick}>
            .
        </button>
        <button className='btn' value="/" onClick={handleClick}>
            /
        </button>
        <button className='btn' value="7" onClick={handleClick}>
            7
        </button>
        <button className='btn' value="8" onClick={handleClick}>
            8
        </button>
        <button className='btn' value="9" onClick={handleClick}>
            9
        </button>
        <button className='btn' value="*" onClick={handleClick}>
            *
        </button>
        <button className='btn' value="4" onClick={handleClick}>
            4
        </button>
        <button className='btn' value="5" onClick={handleClick}>
            5
        </button>
        <button className='btn' value="6" onClick={handleClick}>
            6
        </button>
        <button className='btn' value="-" onClick={handleClick}>
            -
        </button>
        <button className='btn' value="1" onClick={handleClick}>
            1
        </button>
        <button className='btn' value="2" onClick={handleClick}>
            2
        </button>
        <button className='btn' value="3" onClick={handleClick}>
            3
        </button>
        <button className='btn' value="+" onClick={handleClick}>
            +
        </button>
        <button className='btn' value="0" onClick={handleClick}>
            0
        </button>
        <button className='btn' value="=" onClick={handleClick}>
            =
        </button>
        
        </div>
    </div>
  )
}


