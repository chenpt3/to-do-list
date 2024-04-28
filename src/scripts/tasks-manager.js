
class Task {
    constructor(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed) {
        this.taskId = taskId;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.subtasks = subtasks;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = completed;
    }
}

class Subtask {
    constructor(subtaskId, title, notes, dueDate, completed) {
        this.subtaskId = subtaskId;
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.completed = completed;
    };
};

class Note {
    constructor(noteId, title, content) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
    };
};

class ChecklistItem {
    constructor(checklistItemId, title, completed) {
        this.checklistItemId = checklistItemId;
        this.title = title;
        this.completed = completed;
    };
};

class Project {
    constructor(projectId, title, tasks) {
        this.projectId = projectId;
        this.title = title;
        this.tasks = tasks;
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
        const newTask = new Task(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed);
        this.tasks.push(newTask);
    };

    addSubtask(subtaskId, title, notes, dueDate, completed) {
        const newSubtask = new Subtask(subtaskId, title, notes, dueDate, completed);
        this.subtasks.push(newSubtask);
    };

    addNote(noteId, title, content) {
        const newNote = new Note(noteId, title, content);
        this.notes.push(newNote);
    };

    addChecklistItem(checklistItemId, title, completed) {
        const newChecklistItem = new ChecklistItem(checklistItemId, title, completed);
        this.checklistItems.push(newChecklistItem);
    };

    addProject(projectId, title, tasks) {
        const newProject = new Project(projectId, title, tasks);
        this.projects.push(newProject);
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

    getNoteById(noteId) {
        return this.notes.find(note => note.noteId === noteId);
    };

    getChecklistItemById(checklistItemId) {
        return this.checklistItems.find(checklistItem => checklistItem.checklistItemId === checklistItemId);
    };

    getProjectById(projectId) {
        return this.projects.find(project => project.projectId === projectId);
    };

    updateTask(taskId, title, description, dueDate, priority, project, subtasks, notes, checklist, completed) {
        const task = this.getTaskById(task => task.taskId === taskId);
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

    updateSubtask(subtaskId, title, notes, dueDate, completed) {
        const subtask = this.getSubtaskById(subtaskId);
        subtask.title = title;
        subtask.notes = notes;
        subtask.dueDate = dueDate;
        subtask.completed = completed;
    };

    updateNote(noteId, title, content) {
        const note = this.getNoteById(noteId);
        note.title = title;
        note.content = content;
    };

    updateChecklistItem(checklistItemId, title, completed) {
        const checklistItem = this.getChecklistItemById(checklistItemId);
        checklistItem.title = title;
        checklistItem.completed = completed;
    };

    updateProject(projectId, title, tasks) {
        const project = this.getProjectById(projectId);
        project.title = title;
        project.tasks = tasks;
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

    // This function is used to populate the Task Manager with some sample data.
    // This is useful for testing purposes.

    populateTaskManager() {
        this.clearAll();
        this.addTask(1, 'Task 1', 'Description 1', '2021-12-31', 'High', 'Project 1', [], [], [], false);
        this.addTask(2, 'Task 2', 'Description 2', '2021-12-31', 'Medium', 'Project 1', [], [], [], false);
        this.addTask(3, 'Task 3', 'Description 3', '2021-12-31', 'Low', 'Project 1', [], [], [], false);
        this.addTask(4, 'Task 4', 'Description 4', '2021-12-31', 'High', 'Project 2', [], [], [], false);
        this.addTask(5, 'Task 5', 'Description 5', '2021-12-31', 'Medium', 'Project 2', [], [], [], false);
        this.addTask(6, 'Task 6', 'Description 6', '2021-12-31', 'Low', 'Project 2', [], [], [], false);
        this.addSubtask(1, 'Subtask 1', 'Notes 1', '2021-12-31', false);
        this.addSubtask(2, 'Subtask 2', 'Notes 2', '2021-12-31', false);
        this.addSubtask(3, 'Subtask 3', 'Notes 3', '2021-12-31', false);
        this.addSubtask(4, 'Subtask 4', 'Notes 4', '2021-12-31', false);
        this.addSubtask(5, 'Subtask 5', 'Notes 5', '2021-12-31', false);
        this.addSubtask(6, 'Subtask 6', 'Notes 6', '2021-12-31', false);
        this.addNote(1, 'Note 1', 'Content 1');
        this.addNote(2, 'Note 2', 'Content 2');
        this.addNote(3, 'Note 3', 'Content 3');
        this.addNote(4, 'Note 4', 'Content 4');
        this.addNote(5, 'Note 5', 'Content 5');
        this.addNote(6, 'Note 6', 'Content 6');
        this.addChecklistItem(1, 'Checklist Item 1', false);
        this.addChecklistItem(2, 'Checklist Item 2', false);
        this.addChecklistItem(3, 'Checklist Item 3', false);
        this.addChecklistItem(4, 'Checklist Item 4', false);
        this.addChecklistItem(5, 'Checklist Item 5', false);
        this.addChecklistItem(6, 'Checklist Item 6', false);
        this.addProject(1, 'Project 1', [1, 2, 3]);
        this.addProject(2, 'Project 2', [4, 5, 6]);
    };
};

export { TaskManager };