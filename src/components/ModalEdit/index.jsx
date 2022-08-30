import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { useModal } from "../../providers/modal";
import { useLosses } from "../../providers/losses";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { usePagination } from "../../providers/pagination";
import { toast } from "react-toastify";
import { cpfMask, formatDate } from "../../utils";

const ModalEdit = () => {
    const { openCloseModalEdit, modalData } = useModal();
    const { getLosses, totalLosses } = useLosses();
    const { currentPage, setCurrentPage, totalPages } = usePagination();
    const [disabled, setDisabled] = useState(true);

    const formSchema = yup.object().shape({
        first_name: yup.string().required("Campo obrigatório!"),
        last_name: yup.string().required("Campo obrigatório!"),
        email: yup
            .string()
            .required("Campo obrigatório!")
            .email("E-mail inválido!"),
        cpf: yup
            .string()
            .required("Campo obrigatório!")
            .min(14, "CPF inválido!"),
        latitude: yup.string().required("Campo obrigatório!"),
        longitude: yup.string().required("Campo obrigatório!"),
        farming_type: yup.string().required("Campo obrigatório!"),
        harvest_date: yup.string().required("Campo obrigatório!"),
        event_type: yup.string().required("Campo obrigatório!"),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    useEffect(() => {
        setValue("first_name", modalData.first_name);
        setValue("last_name", modalData.last_name);
        setValue("email", modalData.email);
        setValue("cpf", cpfMask(modalData.cpf));
        setValue("latitude", modalData.latitude);
        setValue("longitude", modalData.longitude);
        setValue("farming_type", modalData.farming_type);
        setValue("harvest_date", formatDate(modalData.harvest_date));
        setValue("event_type", modalData.event_type);
    }, [modalData, setValue]);

    const updateLoss = (data) => {
        data.cpf = data.cpf.replace(/\D/g, "");
        data.harvest_date = new Date(data.harvest_date).toLocaleDateString();
        api.patch(`api/losses/${modalData.id}/`, data).then(() =>
            toast.success("Comunicação de perda salva!")
        );
    };

    const deleteLoss = () => {
        api.delete(`api/losses/${modalData.id}/`)
            .then(() => openCloseModalEdit())
            .then(() => {
                if (currentPage === totalPages) {
                    if (Math.ceil((totalLosses - 1) / 10) !== currentPage) {
                        setCurrentPage(currentPage - 1);
                    } else {
                        getLosses(currentPage);
                    }
                } else {
                    getLosses(currentPage);
                }
            });
    };
    return (
        <>
            <Modal
                title={"Comunicação de perda"}
                closeModal={openCloseModalEdit}
                bodyContent={
                    <form id='form_edit' onSubmit={handleSubmit(updateLoss)}>
                        <Input
                            label='Nome'
                            disabled={disabled}
                            register={register}
                            name={"first_name"}
                            error={errors.first_name?.message}
                        />
                        <Input
                            label='Sobrenome'
                            disabled={disabled}
                            register={register}
                            name={"last_name"}
                            error={errors.last_name?.message}
                        />
                        <Input
                            label='E-mail'
                            disabled={disabled}
                            register={register}
                            name={"email"}
                            error={errors.email?.message}
                        />
                        <Input
                            label='CPF'
                            disabled={disabled}
                            register={register}
                            name={"cpf"}
                            error={errors.cpf?.message}
                            mask={cpfMask}
                        />
                        <Input
                            label='Latitude'
                            disabled={disabled}
                            register={register}
                            name={"latitude"}
                            error={errors.latitude?.message}
                        />
                        <Input
                            label='Longitude'
                            disabled={disabled}
                            register={register}
                            name={"longitude"}
                            error={errors.longitude?.message}
                        />
                        <Input
                            label='Tipo da lavoura'
                            disabled={disabled}
                            register={register}
                            name={"farming_type"}
                            error={errors.farming_type?.message}
                        />
                        <Input
                            label='Data da colheita'
                            type='date'
                            disabled={disabled}
                            register={register}
                            name={"harvest_date"}
                            error={errors.harvest_date?.message}
                        />
                        <Select
                            label='Evento ocorrido'
                            disabled={disabled}
                            register={register}
                            name={"event_type"}>
                            <option value='chuva excessiva'>
                                CHUVA EXCESSIVA
                            </option>
                            <option value='geada'>GEADA</option>
                            <option value='granizo'>GRANIZO</option>
                            <option value='seca'>SECA</option>
                            <option value='vendaval'>VENDAVAL</option>
                            <option value='raio'>RAIO</option>
                        </Select>
                    </form>
                }
                footerContent={
                    <>
                        <Button
                            type={disabled ? "submit" : "button"}
                            isTer={disabled ? true : false}
                            form={disabled ? "form_edit" : "form_edit"}
                            onClick={() => setDisabled(!disabled)}>
                            {disabled ? "Editar" : "Salvar"}
                        </Button>
                        <Button type='button' onClick={deleteLoss} isSec>
                            Excluir
                        </Button>
                    </>
                }
            />
        </>
    );
};

export default ModalEdit;
