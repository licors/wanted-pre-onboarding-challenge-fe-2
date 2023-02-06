interface todo  {
	id : number
	content : string
	completionStatus : boolean
	category : string
	tags? : string[]
}

type createTodo = (todo:todo) => boolean;

type readAllTodo = () => todo[];

type readTodoById = (id:number) => todo;

type update = (id:number, content:string, completionStatus:boolean, category:string, tags:string[]) => void;

type deleteAllTodo = () => void;

type deleteTodo = (id:number) => void;

type deleteTag = (id:number, tag:string[]) => void;

type deleteAllTag = (id:number) => void;
