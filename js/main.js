// let names = [
//     {color: 'lightgreen', value: 'Ali' },
//     {color: 'yellow', value: 'Ali' },
//     {color: 'lightblue', value: 'Ahmed' },
//     {color: 'pink', value: 'Rawan' },
//     {color: 'lightgreen', value: 'Ahmed' },
//     {color: 'yellow', value: 'Rawan' },
//     {color: 'lightblue', value: 'Zaineb' },
//     {color: 'pink', value: 'Zaineb' },
//     {color: 'lightgreen', value: 'Ali' },
//     {color: 'yellow', value: 'Ali' },
//     {color: 'lightblue', value: 'Ahmed' },
//     {color: 'pink', value: 'Rawan' },
//     {color: 'lightgreen', value: 'Ahmed' },
//     {color: 'yellow', value: 'Rawan' },
//     {color: 'lightblue', value: 'Zaineb' },
//     {color: 'pink', value: 'Zaineb' },
//     {color: 'lightgreen', value: 'Ali' },
//     {color: 'yellow', value: 'Ali' },
//     {color: 'lightblue', value: 'Ahmed' },
//     {color: 'pink', value: 'Rawan' },
//     {color: 'lightgreen', value: 'Ahmed' },
//     {color: 'yellow', value: 'Rawan' },
//     {color: 'lightblue', value: 'Zaineb' },
//     {color: 'pink', value: 'Zaineb' },
//     {color: 'lightgreen', value: 'Ali' },
//     {color: 'yellow', value: 'Ali' },
//     {color: 'lightblue', value: 'Ahmed' },
//     {color: 'pink', value: 'Rawan' },
//     {color: 'lightgreen', value: 'Ahmed' },
//     {color: 'yellow', value: 'Rawan' },
//   ];
  
//   const rand = (min, max) => Math.random() * (max - min) + min;
//   const spin = document.querySelector('#spin');
//   const canvas = document.querySelector('#wheel')
//   const ctx = canvas.getContext('2d');
//   const radius = canvas.width / 2;
//   const PI = Math.PI; // 3.141592653589793
//   const TAU = 2 * PI; // 6.283185307179586
  
//   const friction = 0.995; // 0.995=soft, 0.99=mid, 0.98=hard
//   let angVel = 0; // Angular velocity
//   let angle = 0; // angle in radians
  
//   const getIndex = () =>
//     Math.floor(names.length - (angle / TAU) * names.length) % names.length;
  
//   // Called when the wheel stops
//   function stopSpinning() {
//     const slice = names[getIndex()];
//     // alert(slice.value)
//     console.log('Landed on', slice.value);
//     names.splice(getIndex(),1)
//     // elemVideo.setAttribute('src', '/');
//     init()
//   }
  
//     function drawname(name, index) {
//     const angle = (TAU / names.length) * index;
//     ctx.save();
//     // COLOR
//     ctx.beginPath();
//     ctx.fillStyle = name.color;
//     ctx.moveTo(radius, radius);
//     ctx.arc(radius, radius, radius, angle, angle + TAU / names.length);
//     ctx.lineTo(radius, radius);
//     ctx.fill();
//     // positioning of the text
//     ctx.translate(radius, radius);
//     ctx.rotate(angle + (TAU / names.length) / 2);
//     console.log(names.length)
//     ctx.textAlign = 'right';
//     ctx.fillStyle = 'black';
//     ctx.font = 'bold 1.3em Courier New';
//     ctx.fillText(name.value, radius - 10, 10);
//     //
//     ctx.restore();
//   }
  
//   function rotate() {
//     const slice = names[getIndex()];
//     // console.log(ctx.canvas.style.transform)
//     ctx.canvas.style.transform = `rotate(${angle - PI / 2}rad)`;
//     spin.textContent = !angVel ? 'SPIN' : slice.value;
//   }
  
//   function frame() {
//     if (!angVel) return;
//     const isSpinning = angVel > 0;
//     angVel *= friction; // Decrement velocity by friction
//     // console.log(angVel)
//     if (angVel < 0.002) angVel = 0; // Bring to stop
//     angle += angVel; // Update angle
//     angle %= TAU; // Normalize angle
//     // console.log(TAU)
//     rotate();
  
//     if (isSpinning && angVel === 0) {
//       // If the wheel has stopped spinning
//       stopSpinning();
//     }
//   }
  
//   function init() {
//     names.forEach(drawname);
//     rotate(); // Initial rotation
//     engine(); // Start engine
//   }
  
//   const engine = () => {
//     frame();
//     requestAnimationFrame(engine);
//   };
  
  
//   init()
//   spin.addEventListener('click', () => {
//     if (!angVel) angVel = rand(0.45, 0.65);
//   });

const names = [
  { color: '#f82', label: 'Stack' },
  { color: '#0bf', label: '10' },
  { color: '#fb0', label: '200' },
  // { color: '#0fb', label: '50' },
  // { color: '#b0f', label: '100' },
  // { color: '#f0b', label: '5' },
  // { color: '#bf0', label: '500' }
]

const rand = (m, M) => Math.random() * (M - m) + m
const tot = names.length
const spinEl = document.querySelector('#spin')
const ctx = document.querySelector('#wheel').getContext('2d')
const dia = ctx.canvas.width
const rad = dia / 2
const PI = Math.PI
const TAU = 2 * PI
const arc = TAU / names.length

const friction = 0.991 // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0 // Angular velocity
let ang = 0 // Angle in radians

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot

  function stopSpinning() {
    const slice = names[getIndex()];
    // alert(slice.value)
    console.log('Landed on', slice.value);
    names.splice(getIndex(),1)
    // elemVideo.setAttribute('src', '/');
    console.log(names)
    init()
  }

function drawName(name, i) {
  const ang = arc * i
  ctx.save()
  // COLOR
  ctx.beginPath()
  ctx.fillStyle = name.color
  ctx.moveTo(rad, rad)
  ctx.arc(rad, rad, rad, ang, ang + arc)
  ctx.lineTo(rad, rad)
  ctx.fill()
  // TEXT
  ctx.translate(rad, rad)
  ctx.rotate(ang + arc / 2)
  ctx.textAlign = 'right'
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 30px sans-serif'
  ctx.fillText(name.label, rad - 10, 10)
  //
  ctx.restore()
}

function rotate() {
  const name = names[getIndex()]
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`
  spinEl.textContent = !angVel ? 'SPIN' : name.label
  spinEl.style.background = name.color
}

function frame() {
  if (!angVel) return
    const isSpinning = angVel > 0;
  angVel *= friction // Decrement velocity by friction
  if (angVel < 0.002) angVel = 0 // Bring to stop
  ang += angVel // Update angle
  ang %= TAU // Normalize angle
  rotate()
      if (isSpinning && angVel === 0) {
      // If the wheel has stopped spinning
      stopSpinning();
    }
}

function engine() {
  frame()
  requestAnimationFrame(engine)
}

function init() {
  names.forEach(drawName)
  rotate() // Initial rotation
  engine() // Start engine
  spinEl.addEventListener('click', () => {
    if (!angVel) angVel = rand(0.25, 0.45)
  })
}

init()
