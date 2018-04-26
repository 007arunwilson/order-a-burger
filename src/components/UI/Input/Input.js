import React from 'react';

import classes from './Input.css';

const input = (props) => {

    let input_jsx;

    switch(props.elementType)
    {

        case('input'):

            input_jsx = (<input
                 value={props.value}
                 className={classes.InputElement} 
                 {...props.elementConfig} />);

        break;
        case('textarea'):

            input_jsx = (<textarea
                 value={props.value}
                 className={classes.InputElement} 
                 {...props.elementConfig} />);

        break;
        case('select'):

            input_jsx = (<select
                 value={props.value}
                 className={classes.InputElement} 
                 {...props.elementConfig.config} >
                 {props.elementConfig.options.map(option=>{

                    return (
                        <option value={option.value} >{option.displayValue}</option>
                    )
                
                 })}
                 </select>);

        break;
        default:

            input_jsx = (<input
                 value={props.value}
                 className={classes.InputElement} 
                 {...props.elementConfig} />);

        break;
    }

    return (<div className={classes.Input} >
        <label className={classes.Label} >{props.label}</label>
        {input_jsx}
    </div>);


}

export default input;