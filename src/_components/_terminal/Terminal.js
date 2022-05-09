import * as React from 'react'
import { XTerm } from 'xterm-for-react'

export const Terminal = (props) => {
    const xtermRef = React.useRef(null)
    React.useEffect(() => {
        setTimeout(() => {
            xtermRef.current.terminal.writeln(props.data)
        }, 100);
    })
    return (<XTerm ref={xtermRef} />)
}