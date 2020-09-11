import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import style from "./style";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../Constants/index";
import TaskList from "../../Components/TaskList";
import TaskForm from "../../Components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../Redux/Actions/Task";
import * as modelAciton from "../../Redux/Actions/Modals";
import { toast } from "react-toastify";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Box from "@material-ui/core/Box";
class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.renderSearchBox = this.renderSearchBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.onUpdateTask = this.onUpdateTask.bind(this);
    this.handleDelTask = this.handleDelTask.bind(this);
  }
  componentDidMount() {
    console.log("run");
    const { taskActionCreator } = this.props;
    const { fetchListTask } = taskActionCreator;
    fetchListTask();
  }
  handleOpen() {
    toast.success("Bạn Hãy Thêm 1 Công Việc !");
    const { modelActionCreator, taskActionCreator } = this.props;
    const {
      showModal,
      changeModelContent,
      changeModelTitle,
    } = modelActionCreator;
    const { edittingModel } = taskActionCreator;

    edittingModel({
      id: "",
      title: "",
      description: "",
      status: "",
    });
    showModal();
    changeModelContent(<TaskForm />);
    changeModelTitle("Thêm Công Việc");
  }
  handleAddTask() {
    console.log("Add Task");
  }
  handleChange(event) {
    this.setState({
      searchName: event.target.value,
    });
    const { taskActionCreator } = this.props;
    const { filterTask } = taskActionCreator;
    filterTask(event.target.value);
  }
  renderSearchBox() {
    const { searchName } = this.state;
    let xhtml = null;
    xhtml = (
      <div>
        <SearchBox searchName={searchName} handleChange={this.handleChange} />
      </div>
    );
    return xhtml;
  }
  onUpdateTask(task) {
    const { modelActionCreator, taskActionCreator } = this.props;
    const {
      showModal,
      changeModelContent,
      changeModelTitle,
    } = modelActionCreator;
    const { edittingModel } = taskActionCreator;
    showModal();
    changeModelContent(<TaskForm />);
    changeModelTitle("Update Công Việc");
    edittingModel(task);
  }
  handleDelTask(task) {
    const { modelActionCreator, classes } = this.props;
    const {
      showModal,
      changeModelContent,
      changeModelTitle,
      hidenModal,
    } = modelActionCreator;
    showModal();
    changeModelContent(
      <div className={classes.box}>
        <Box className={classes.title} mt={2} mb={2}>
          Bạn Có Muốn Xóa{" "}
          <span className={classes.modalConfigTextBold}>{task.title}</span> Này
          Không ?
        </Box>
        <Box className={classes.aciton}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => this.onDelTask(task)}
            >
              Đồng Ý
            </Button>
            <Button variant="outlined" color="secondary" onClick={hidenModal}>
              Hủy
            </Button>
          </Grid>
        </Box>
      </div>
    );
    changeModelTitle("Thêm Công Việc");
  }
  onDelTask(task) {
    const { modelActionCreator } = this.props;
    const { hidenModal } = modelActionCreator;
    const { taskActionCreator } = this.props;
    const { del_task } = taskActionCreator;
    del_task(task);
    hidenModal();
  }
  render() {
    const { ListTask } = this.props;
    return (
      <div className="taskboard">
        <div>
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.handleOpen}
          >
            <Icon />
            Thêm Công Việc
          </Button>
        </div>

        {this.renderSearchBox()}

        <Grid container spacing={3}>
          {STATUSES.map((status) => {
            const listfilter = ListTask.filter((task) => {
              return task.status === status.value;
            });
            return (
              <TaskList
                listfilter={listfilter}
                status={status}
                key={status.value}
                onUpdateTask={this.onUpdateTask}
                handleDelTask={this.handleDelTask}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ListTask: state.task.listTask,
    open: state.model.showModel,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskActions, dispatch),
    modelActionCreator: bindActionCreators(modelAciton, dispatch),
  };
};
export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
