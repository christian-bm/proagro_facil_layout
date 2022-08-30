import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { useModal } from "../../providers/modal";
import { useLosses } from "../../providers/losses";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { cpfMask, formatDate } from "../../utils";
import { usePagination } from "../../providers/pagination";
import { toast } from "react-toastify";

const ModalCreate = () => {
    const { openCloseModalCreate } = useModal();
    const { getLosses } = useLosses();
    const { setCurrentPage } = usePagination();

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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const createLoss = (data) => {
        data.cpf = data.cpf.replace(/\D/g, "");
        toast.promise(
            api.post("api/losses/", data).then(() => {
                openCloseModalCreate();
                setCurrentPage(1);
                getLosses();
            }),
            {
                pending: "Verificando...",
                error: "Evento divergente do que já consta no banco de dados!",
                success: "Perda registrada!",
            }
        );
    };

    return (
        <>
            <Modal
                title={"Comunicação de perda"}
                closeModal={openCloseModalCreate}
                bodyContent={
                    <form
                        id='form_create'
                        autoComplete='off'
                        onSubmit={handleSubmit(createLoss)}>
                        <Input
                            label='Nome'
                            placeholder='Ex: João'
                            register={register}
                            name={"first_name"}
                            error={errors.first_name?.message}
                        />
                        <Input
                            label='Sobrenome'
                            placeholder='Ex: de Souza'
                            register={register}
                            name={"last_name"}
                            error={errors.last_name?.message}
                        />
                        <Input
                            label='E-mail'
                            placeholder='Ex: exemple@mail.com'
                            register={register}
                            name={"email"}
                            error={errors.email?.message}
                        />
                        <Input
                            label='CPF'
                            placeholder='Ex: 123.123.123-12'
                            register={register}
                            name={"cpf"}
                            error={errors.cpf?.message}
                            mask={cpfMask}
                        />
                        <Input
                            label='Latitude'
                            placeholder='Ex: -54.25634'
                            register={register}
                            name={"latitude"}
                            error={errors.latitude?.message}
                        />
                        <Input
                            label='Longitude'
                            placeholder='Ex: 45.12354'
                            register={register}
                            name={"longitude"}
                            error={errors.longitude?.message}
                        />
                        <Input
                            label='Tipo da lavoura'
                            placeholder='Ex: Soja'
                            register={register}
                            name={"farming_type"}
                            error={errors.farming_type?.message}
                        />
                        <Input
                            label='Data da colheita'
                            defaultValue={formatDate(
                                new Date().toLocaleDateString()
                            )}
                            type='date'
                            register={register}
                            name={"harvest_date"}
                            error={errors.harvest_date?.message}
                        />
                        <Select
                            label='Evento ocorrido'
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
                    <Button width='200px' form='form_create'>
                        Criar
                    </Button>
                }
            />
        </>
    );
};

export default ModalCreate;
