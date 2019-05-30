const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data);

const $description = document.getElementById("description");
const $protein = document.getElementById("protein");
const $carb = document.getElementById("carb");
const $calory = document.getElementById("calory");

const list = [];

$description.addEventListener("keypress", () => {
  $description.classList.remove("is-invalid");
});

$protein.addEventListener("keypress", () => {
  $protein.classList.remove("is-invalid");
});

$carb.addEventListener("keypress", () => {
  $carb.classList.remove("is-invalid");
});

$calory.addEventListener("keypress", () => {
  $calory.classList.remove("is-invalid");
});

const attrsToString = (obj = {}) => {
  const attrs = [];
  for (let key in obj) {
    attrs.push(`${key}="${obj[key]}"`);
  }
  return attrs.join(" ");
};

const tagAttrs = obj => (content = "") => {
  return `<${obj.tag}${obj.attrs ? " " : ""}${attrsToString(
    obj.attrs
  )}>${content}</${obj.tag}>`;
};

const tag = t => {
  if (typeof t === "string") {
    tagAttrs({ tag: t });
  } else {
    tagAttrs(t);
  }
};

const validateInputs = () => {
  $description.value ? "" : $description.classList.add("is-invalid");
  $protein.value ? "" : $protein.classList.add("is-invalid");
  $carb.value ? "" : $carb.classList.add("is-invalid");
  calory.value ? "" : calory.classList.add("is-invalid");

  if ($description.value && $protein.value && $carb.value && $calory.value) {
    add();
    cleanIputs();
    console.log(list);
  }
};

const add = () => {
  const newListElement = {
    description: $description.value,
    calories: parseInt($calory.value),
    proteins: parseInt($protein.value),
    carbs: parseInt($carb.value)
  };

  list.push(newListElement);
};

const cleanIputs = () => {
  $description.value = "";
  $protein.value = "";
  $carb.value = "";
  $calory.value = "";
};

const buildSum = a => {
  return b => {
    return a + b;
  };
};

const addFive = buildSum(5);
console.log(addFive(5));
