function calculate(salary, pension, irp, isaPension = 0, isaIrp = 0, priorIsaLimit = 0) {
  const toWon = value => Math.round(value * 10000);
  const eligiblePension = Math.min(toWon(pension) + toWon(isaPension), 6_000_000);
  const eligibleIrp = Math.min(toWon(irp) + toWon(isaIrp), 9_000_000 - eligiblePension);
  const isaExtra = Math.min(
    Math.floor((toWon(isaPension) + toWon(isaIrp)) / 10),
    3_000_000 - toWon(priorIsaLimit),
  );
  const eligibleTotal = eligiblePension + eligibleIrp + isaExtra;
  const incomeRate = toWon(salary) <= 55_000_000 ? 15 : 12;
  return {
    eligiblePension,
    eligibleIrp,
    isaExtra,
    eligibleTotal,
    rate: incomeRate * 11 / 10,
    incomeCredit: Math.floor(eligibleTotal * incomeRate / 100),
    estimate: Math.floor(eligibleTotal * incomeRate * 11 / 1000),
  };
}

if (typeof module !== 'undefined') module.exports = { calculate };

if (typeof document !== 'undefined') {
  const form = document.querySelector('#calculator');
  const isaInputs = document.querySelector('#isa-inputs');
  const fields = ['salary', 'pension', 'irp', 'isa-pension', 'isa-irp', 'prior-isa-limit']
    .map(id => document.getElementById(id));
  const formatWon = value => `${value.toLocaleString('ko-KR')}원`;
  const outputIds = {
    eligiblePension: 'eligible-pension',
    eligibleIrp: 'eligible-irp',
    isaExtra: 'isa-extra',
    eligibleTotal: 'eligible-total',
    rate: 'rate',
    incomeCredit: 'income-credit',
    estimate: 'estimate',
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const result = calculate(...fields.map(field => field.valueAsNumber));
    for (const [key, id] of Object.entries(outputIds)) {
      document.getElementById(id).textContent = key === 'rate'
        ? `${result[key].toFixed(1)}%`
        : formatWon(result[key]);
    }
  });

  form.addEventListener('input', () => {
    for (const id of Object.values(outputIds)) document.getElementById(id).textContent = '—';
  });

  isaInputs.addEventListener('invalid', () => { isaInputs.open = true; }, true);

  document.querySelector('#examples').addEventListener('click', event => {
    const button = event.target.closest('button[data-values]');
    if (!button) return;
    const values = button.dataset.values.split(',');
    fields.forEach((field, index) => { field.value = values[index] ?? '0'; });
    isaInputs.open = values.length > 3;
    form.requestSubmit();
  });
}
