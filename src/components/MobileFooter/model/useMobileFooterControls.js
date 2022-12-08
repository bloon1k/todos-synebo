const useMobileFooterControls = () => {
    const linkStyle = ({ isActive }) => {
        return {
            color: isActive && 'hsl(220, 98%, 61%)',
        }
    }

    return { linkStyle }
}

export { useMobileFooterControls }
