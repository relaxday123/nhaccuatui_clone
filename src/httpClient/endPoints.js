import httpInstance from "./httpInstance";

export function getData() {
  return httpInstance.get("/searchalbum.php?s=daft_punk");
}

export function addData(data) {
  return httpInstance.post("/todos/1", JSON.stringify(data));
}