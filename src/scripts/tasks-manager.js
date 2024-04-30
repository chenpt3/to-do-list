import { format } from "date-fns";

class Task {
    constructor(taskId, title = `Task #${taskId}`, description = "", dueDate = undefined, priority = "Normal", project = undefined, subtasks = undefined, notes = undefined, checklist = undefined, completed = false, status = "Active") {
        this.taskId = taskId;
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.project = project;
        this.subtasks = subtasks;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = completed;
        this.status = status;
        this.dueIn = this.calculateDueIn();
    };

    calculateDueIn() {
        if (this.dueDate) {
            const today = new Date();
            const dueDate = this.dueDate;
            const differenceInTime = dueDate.getTime() - today.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);          
            return Math.round(differenceInDays);
        } else {
            return undefined;
        };
    };


};

class Subtask {
    constructor(subtaskId, title, notes, dueDate, completed, owner) {
        this.subtaskId = subtaskId;
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.completed = completed;
        this.owner = owner;
    };
};

class Note {
    constructor(noteId, title, content, owner) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.owner = owner;
    };
};

class ChecklistItem {
    constructor(checklistItemId, title, completed, owner) {
        this.checklistItemId = checklistItemId;
        this.title = title;
        this.completed = completed;
        this.owner = owner;
    };
};

class Project {
    constructor(projectId, title = `Project #${projectId}`, tasks = undefined, description = "", dueDate = undefined, priority = "Normal", notes = undefined, checklist = undefined, completed = false, status = "Active") {
        this.projectId = projectId;
        this.title = title;
        this.tasks = tasks;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = completed;
        this.status = status;
        this.dueIn = this.calculateDueIn();
    };

    calculateDueIn() {
        if (this.dueDate) {
            const today = new Date();
            const dueDate = this.dueDate;
            const differenceInTime = dueDate.getTime() - today.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            return Math.round(differenceInDays);
        } else {
            return undefined;
        };
    };
};

class TaskManager {
    constructor() {
        this.tasks = [];
        this.subtasks = [];
        this.notes = [];
        this.checklistItems = [];
        this.projects = [];
        this.populateTaskManagerTemporarilyForTesting();
    };

    addTask(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed) {
        const task = new Task(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed);
        this.tasks.push(task);
    };

    addSubtask(subtaskId, title, notes, dueDate, completed, owner) {
        const subtask = new Subtask(subtaskId, title, notes, dueDate, completed, owner);
        this.subtasks.push(subtask);
    };

    addNote(noteId, title, content, owner) {
        const note = new Note(noteId, title, content, owner);
        this.notes.push(note);
    };

    addChecklistItem(checklistItemId, title, completed, owner) {
        const checklistItem = new ChecklistItem(checklistItemId, title, completed, owner);
        this.checklistItems.push(checklistItem);
    };

    addProject(projectId, title, tasks, description, dueDate, priority, notes, checklist, completed) {
        const project = new Project(projectId, title, tasks, description, dueDate, priority, notes, checklist, completed);
        this.projects.push(project);
    };

    getTasks() {
        return this.tasks;
    };

    getSubtasks() {
        return this.subtasks;
    };

    getNotes() {
        return this.notes;
    };

    getChecklistItems() {
        return this.checklistItems;
    };

    getProjects() {
        return this.projects;
    };

    getTaskById(taskId) {
        return this.tasks.find(task => task.taskId === taskId);
    };

    getSubtaskById(subtaskId) {
        return this.subtasks.find(subtask => subtask.subtaskId === subtaskId);
    };

    getTaskByTitle(title) {
        return this.tasks.find(task => task.title === title);
    };

    getProjectByTitle(title) {
        return this.projects.find(project => project.title === title);
    };

    getNoteById(noteId) {
        return this.notes.find(note => note.noteId === noteId);
    };

    getChecklistItemById(checklistItemId) {
        return this.checklistItems.find(checklistItem => checklistItem.checklistItemId === checklistItemId);
    };

    getProjectById(projectId) {
        return this.projects.find(project => project.projectId === projectId);
    };

    editTask(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed) {
        const task = this.getTaskById(taskId);
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
        task.project = project;
        task.subtasks = subtasks;
        task.notes = notes;
        task.checklist = checklist;
        task.completed = completed;
    };

    editSubtask(subtaskId, title, notes, dueDate, completed, owner) {
        const subtask = this.getSubtaskById(subtaskId);
        subtask.title = title;
        subtask.notes = notes;
        subtask.dueDate = dueDate;
        subtask.completed = completed;
        subtask.owner = owner;
    };

    editNote(noteId, title, content, owner) {
        const note = this.getNoteById(noteId);
        note.title = title;
        note.content = content;
        note.owner = owner;
    };

    editChecklistItem(checklistItemId, title, completed, owner) {
        const checklistItem = this.getChecklistItemById(checklistItemId);
        checklistItem.title = title;
        checklistItem.completed = completed;
        checklistItem.owner = owner;
    };

    editProject(projectId, title, tasks, description, dueDate, priority, notes, checklist, completed) {
        const project = this.getProjectById(projectId);
        project.title = title;
        project.tasks = tasks;
        project.description = description;
        project.dueDate = dueDate;
        project.priority = priority;
        project.notes = notes;
        project.checklist = checklist;
        project.completed = completed;
    };

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.taskId !== taskId);
    };

    deleteSubtask(subtaskId) {
        this.subtasks = this.subtasks.filter(subtask => subtask.subtaskId !== subtaskId);
    };

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => note.noteId !== noteId);
    };

    deleteChecklistItem(checklistItemId) {
        this.checklistItems = this.checklistItems.filter(checklistItem => checklistItem.checklistItemId !== checklistItemId);
    };

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.projectId !== projectId);
    };

    clearTasks() {
        this.tasks = [];
    };

    clearSubtasks() {
        this.subtasks = [];
    };

    clearNotes() {
        this.notes = [];
    };

    clearChecklistItems() {
        this.checklistItems = [];
    };

    clearProjects() {
        this.projects = [];
    };

    clearAll() {
        this.clearTasks();
        this.clearSubtasks();
        this.clearNotes();
        this.clearChecklistItems();
        this.clearProjects();
    };

    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        localStorage.setItem("subtasks", JSON.stringify(this.subtasks));
        localStorage.setItem("notes", JSON.stringify(this.notes));
        localStorage.setItem("checklistItems", JSON.stringify(this.checklistItems));
        localStorage.setItem("projects", JSON.stringify(this.projects));
    };

    load() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const subtasks = JSON.parse(localStorage.getItem("subtasks"));
        const notes = JSON.parse(localStorage.getItem("notes"));
        const checklistItems = JSON.parse(localStorage.getItem("checklistItems"));
        const projects = JSON.parse(localStorage.getItem("projects"));

        if (tasks) {
            this.tasks = tasks;
        };

        if (subtasks) {
            this.subtasks = subtasks;
        };

        if (notes) {
            this.notes = notes;
        };

        if (checklistItems) {
            this.checklistItems = checklistItems;
        };

        if (projects) {
            this.projects = projects;
        };
    };

    populateTaskManagerTemporarilyForTesting() {
        this.addTask(1, "Task 1", "Description 1", new Date("2024-05-01"), "High", "Project 1", [], [], [], false);
        this.addTask(2, "Task 2", "Description 2", new Date("2024-05-05"), "Medium", "Project 2", [], [], [], false);
        this.addTask(3, "Task 3", "Description 3", new Date("2024-05-15"), "Low", "Project 3", [], [], [], false);

        this.addSubtask(1, "Subtask 1", "Notes 1", format(new Date(), "yyyy-MM-dd"), false, "Task 1");
        this.addSubtask(2, "Subtask 2", "Notes 2", format(new Date(), "yyyy-MM-dd"), false, "Task 2");
        this.addSubtask(3, "Subtask 3", "Notes 3", format(new Date(), "yyyy-MM-dd"), false, "Task 3");

        this.addNote(1, "Note 1", "Content 1", "Task 1");
        this.addNote(2, "Note 2", "Content 2", "Task 2");
        this.addNote(3, "Note 3", "Content 3", "Task 3");

        this.addChecklistItem(1, "Checklist Item 1", false, "Task 1");
        this.addChecklistItem(2, "Checklist Item 2", false, "Task 2");
        this.addChecklistItem(3, "Checklist Item 3", false, "Task 3");

        this.addProject(1, "Project 1", [], "Description 1", format(new Date(), "yyyy-MM-dd"), "High", [], [], false);
        this.addProject(2, "Project 2", [], "Description 2", format(new Date(), "yyyy-MM-dd"), "Medium", [], [], false);
        this.addProject(3, "Project 3", [], "Description 3", format(new Date(), "yyyy-MM-dd"), "Low", [], [], false);

        this.addChecklistItem(4, "Checklist Item 4", false, "Project 1");
        this.addChecklistItem(5, "Checklist Item 5", false, "Project 2");
        this.addChecklistItem(6, "Checklist Item 6", false, "Project 3");

        this.addNote(4, "Note 4", "Content 4", "Project 1");
        this.addNote(5, "Note 5", "Content 5", "Project 2");
        this.addNote(6, "Note 6", "Content 6", "Project 3");
    };
};

export { TaskManager };