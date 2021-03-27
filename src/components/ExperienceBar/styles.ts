import styled from 'styled-components';

interface IProgressBarProps {
    moveLeft: string;
}

export const Header = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 1rem;
    }

    > div {
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: var(--gray-line);
        margin: 0 1.5rem;
        position: relative;
    }
`;

export const CurrentExperienceBar = styled.div<IProgressBarProps>`
    height: 4px;
    border-radius: 4px;
    background: var(--green);
    width: ${props => props.moveLeft}
`;

export const CurrentExperienceText = styled.span<IProgressBarProps>`
    position: absolute;
    top: 12px;
    left: ${props => props.moveLeft};
    transform: translateX(-50%)
`;

// align-items: alinha o conteúdo do elemento verticalmente ao centro
