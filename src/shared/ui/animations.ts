import { keyframes } from 'styled-components'

export const appear = keyframes`
0%{
    opacity: 0;
    
}

100%{
    opacity: 1;
    
}

`

export const scaleIn = keyframes`
0%{
    transform: scale(0.5)
}

100%{
    transform: scale(1);
}
`
