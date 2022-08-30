import { useEffect, useState } from "react";
import { StyledDiv } from "./styles";

import Button from "../Button";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

import { useLosses } from "../../providers/losses";
import { usePagination } from "../../providers/pagination";

const Pagination = ({ cpf }) => {
    const { totalLosses, getLossesByPage, getLossesByCpfByPage } = useLosses();
    const { currentPage, setCurrentPage, totalPages, setTotalPages } =
        usePagination();

    useEffect(() => {
        const total = Math.ceil(totalLosses / 10);
        setTotalPages(total);
    }, [totalLosses]);

    useEffect(() => {
        if (cpf.length !== 0) {
            getLossesByCpfByPage(cpf, currentPage);
        } else {
            getLossesByPage(currentPage);
        }
    }, [currentPage]);

    return (
        <>
            {totalLosses > 0 && (
                <StyledDiv>
                    <div className='div_last'>
                        {currentPage > 1 && (
                            <Button
                                className='button_last'
                                onClick={() => setCurrentPage(currentPage - 1)}
                                width='60px'>
                                <BiFirstPage />
                            </Button>
                        )}
                        {currentPage > 2 && (
                            <Button
                                onClick={() => setCurrentPage(1)}
                                width='40px'>
                                1
                            </Button>
                        )}
                        {currentPage > 1 && (
                            <Button
                                className='button_hidden'
                                onClick={() => setCurrentPage(currentPage - 1)}
                                width='40px'>
                                {currentPage - 1}
                            </Button>
                        )}
                    </div>
                    <Button width='40px' className='main_button'>
                        {currentPage}
                    </Button>
                    <div className='div_next'>
                        {currentPage < totalPages && (
                            <Button
                                className='button_hidden'
                                onClick={() => setCurrentPage(currentPage + 1)}
                                width='40px'>
                                {currentPage + 1}
                            </Button>
                        )}
                        {currentPage + 1 < totalPages && (
                            <Button
                                onClick={() => setCurrentPage(totalPages)}
                                width='40px'>
                                {totalPages}
                            </Button>
                        )}
                        {currentPage < totalPages && (
                            <Button
                                className='button_next'
                                onClick={() => setCurrentPage(currentPage + 1)}
                                width='60px'>
                                <BiLastPage />
                            </Button>
                        )}
                    </div>
                </StyledDiv>
            )}
        </>
    );
};

export default Pagination;
