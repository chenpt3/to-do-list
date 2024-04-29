import { format } from "date-fns";

class Task {
    constructor(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed, status) {
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
    constructor(projectId, title, tasks, description, dueDate, priority, notes, checklist, completed) {
        this.projectId = projectId;
        this.title = title;
        this.tasks = tasks;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = completed;
    };
};

class TaskManager {
    constructor() {
        this.tasks = [];
        this.subtasks = [];
        this.notes = [];
        this.checklistItems = [];
        this.projects = [];
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
};

export { TaskManager };