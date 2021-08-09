import React from 'react'

export default function moodSelect({className, onChange}) {
    const moods = ["😌", "😊", "😄", "🤣", "😰", "🥰", "🙃", "😔", 
                   "😇", "🤔", "😩", "😭", "😤", "😵", "🤒", "🤤"];
    let func = () => false;
    if (onChange instanceof Function) {
        func = onChange
    }

    return (
        <select className={className} onChange={(e) => func(e.target.value)} >
            
            <option value=''></option>

            {moods.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
            })}

        </select>
    )
}
