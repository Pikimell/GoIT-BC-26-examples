/* 
 - add remove event for element
 - name for callback
    - hanle*:   handleSubjectEvent
    - *Handler: subjectEventHandler
    - on*: onSubjectEvent

 - refs callback
 - Object event
*/
const targetBtn = document.querySelector('[data-action="target-btn"]');
const addListenerBtn = document.querySelector('[data-action="add-event"]');
const removeListenerBtn = document.querySelector(
  '[data-action="remove-event"]'
);

addListenerBtn.addEventListener("click", () => {
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Remove event listener");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event.currentTarget);
}
