/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {number} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} completionStatus - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function createTodo(id, content, completionStatus, category, tags) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * @returns {Object[]} todoList - 모든 할 일
 */
function readAllTodo() {}

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id - 아이디
 * @returns {Object} todo - 해당 아이디의 할 일
 */
function readTodoById(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * 해당 id 값 읽은 후 변경한 것만 바꿔서 저장
 * @param {number} id - 아이디
 * @param {string} [content] - 내용
 * @param {boolean} [completionStatus] - 완료여부
 * @param {string} [category] - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function update(id, content, completionStatus, category, tags) {}

/**
 * 모든 할 일을 제거할 수 있다.
 */
function deleteAllTodo() {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 아이디
 */
function deleteTodo(id) {}

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} id - 아이디
 * @param {string} tag - 태그
 */
function deleteTag(id, tag) {}

/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id - 아이디
*/
function deleteAllTag(id) {}
