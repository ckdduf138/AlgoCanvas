import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
};

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PageNumber = styled.div<{ theme: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 22px;
    cursor: pointer;

    color: ${({ theme: themeType }) => (themeType === 'light' ? '#000' : '#fff')};

    &:hover {
        background-color: ${({ theme: themeType }) => (themeType === 'light' ? '#f7f8f9' : '#f7f8f9')};
    }

    &.active {
        color: ${({ theme: themeType }) => (themeType === 'light' ? '#fff' : '#000')};
        background-color: ${({ theme: themeType }) => (themeType === 'light' ? '#0b131b' : '#f7f8f9')};
    }
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, goToPage }) => {
    const { theme } = useTheme();
    
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <PaginationContainer>
            {pageNumbers.map((pageNumber) => (
                <PageNumber
                    theme = {theme}
                    key={pageNumber}
                    className={currentPage === pageNumber - 1 ? 'active' : ''}
                    onClick={() => goToPage(pageNumber - 1)}
                >
                    {pageNumber}
                </PageNumber>
            ))}
        </PaginationContainer>
    );
};

export default Pagination;