const models = {"map": {"url": "/diagrams/Saigon_Encounter_Map.html", "title": "Interactive Saigon encounter map with project controls", "caption": "A speculative overlay of project relationships on Saigon. The controls change an illustrative field of attention; they do not measure participants\u2019 perception."}, "circuit": {"url": "/diagrams/Encounter_Interactive.html", "title": "Interactive synth circuit with six adjustable encounter conditions", "caption": "Adjust the six conditions to change the illustrative sensory traces. The circuit is a conceptual analogy for a proposed exhibition."}};
const modelButtons = document.querySelectorAll('[data-model]');
modelButtons.forEach(button => button.addEventListener('click', () => {
  if (button.getAttribute('aria-pressed') === 'true') return;
  const model = models[button.dataset.model];
  const frame = document.getElementById('encounter-frame');
  frame.src = model.url; frame.title = model.title;
  document.getElementById('model-open').href = model.url;
  document.getElementById('model-caption').textContent = model.caption;
  modelButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
}));
