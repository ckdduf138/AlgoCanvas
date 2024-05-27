import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import Text from '../common/text';

const StyledFooter = styled.footer<{ theme: string }>`
    background-color: ${({ theme: themeType }) => (themeType === 'light' ? '#ffffff' : '#0b131b')};
    width: 100%;
    height: 10%;
`;

const FooterText = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Footer: React.FC = () => {
    const { theme } = useTheme();

    return (
        <StyledFooter theme={theme}>
            <FooterText>
                <Text theme={theme}>Algo-Canvas</Text>
                <Text theme={theme}>© 2024 - 2024</Text>
            </FooterText>
        </StyledFooter>
    );
};

export default Footer;
