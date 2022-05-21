import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createTask } from "../store/reducers/taskReducer";
import { generateUniqueId } from "../utils/helperFunctions";
export default function useCreateTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`Task name is required`),
  });
  const handleSubmit = (values: any, actions: any) => {
    dispatch(
      createTask({ ...values, id: generateUniqueId(), selected: false })
    );
    actions.setSubmitting(false);
    navigate("/list-tasks");
  };
  return { validationSchema, handleSubmit };
}
