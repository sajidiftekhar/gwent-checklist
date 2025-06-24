import { styled } from '@mui/system'
import Tooltip, { tooltipClasses, type TooltipProps } from '@mui/material/Tooltip'

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'rgba(#ffffff, 0.9)',
        maxWidth: 300,
        fontSize: 12,
        padding: '10px  15px',
    },
}))

export default HtmlTooltip