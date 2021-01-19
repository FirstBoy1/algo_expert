class Manager {
  constructor(value) {
    this.value = value;
    this.directManagers = [];
  }

  addManagers(...managers) {
    this.directManagers.push(...managers);
  }
}

const a = new Manager('A');
const b = new Manager('B');
const c = new Manager('C');
const d = new Manager('D');
const e = new Manager('E');
const f = new Manager('F');
const g = new Manager('G');
const h = new Manager('H');
const i = new Manager('I');
const j = new Manager('J');
const k = new Manager('K');
const l = new Manager('L');
const m = new Manager('M');
const n = new Manager('N');
const o = new Manager('O');
const p = new Manager('P');
const q = new Manager('Q');
const r = new Manager('R');
const s = new Manager('S');
const t = new Manager('T');
const u = new Manager('U');
const v = new Manager('V');
const w = new Manager('W');
const x = new Manager('X');
const y = new Manager('Y');
const z = new Manager('Z');

x.addManagers(z);
v.addManagers(w, x, y);
r.addManagers(v);
p.addManagers(t, u);
h.addManagers(o, p, q, r);
b.addManagers(g, h, i);
c.addManagers(j);
d.addManagers(k, l);
f.addManagers(m, n);
a.addManagers(b, c, d, e, f);

// O(n) time | O(d) space
function lowestCommonManager(topManager, firstReport, secondReport) {
  return getOrgInfo(topManager, firstReport, secondReport);
}

function getOrgInfo(manager, firstReport, secondReport) {
  let numImportantReports = 0;

  for (const directManager of manager.directManagers) {
    const orgInfo = getOrgInfo(directManager, firstReport, secondReport);
    if (orgInfo.lowestCommonManager) return orgInfo;
    numImportantReports += orgInfo.numImportantReports;
  }

  if (manager === firstReport || manager === secondReport) {
    numImportantReports++;
  }

  const lowestCommonManager = numImportantReports === 2 ? manager : null;
  return { lowestCommonManager, numImportantReports };
}

const lowest = lowestCommonManager(a, p, i);
console.log(lowest);
