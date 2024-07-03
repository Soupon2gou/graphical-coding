// CC Fest NYC 2024 poster by Theo Chan 
// with color gradient background borrowed from Jaemi13 - https://editor.p5js.org/Jaemi13/sketches/gAS-FB5Sx

const matterContainer = document.getElementById("matter-container");
const memberNumber = document.getElementById("memberNumber");

const colors = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];

const size = 70;
const amount = 100;

let engine = new Matter.Engine.create();
let render = Matter.Render.create({
  element: matterContainer,
  engine: engine,
  options: {
    width: matterContainer.clientWidth,
    height: matterContainer.clientHeight,
    wireframes: false,
    background: "white",
  },
});

let ground = Matter.Bodies.rectangle(
  matterContainer.clientWidth / 2,
  matterContainer.clientHeight + 30,
  27184,
  60,
  { isStatic: true }
);
let leftWall = Matter.Bodies.rectangle(
  -30,
  matterContainer.clientHeight / 2,
  60,
  27184,
  { isStatic: true }
);
let rightWall = Matter.Bodies.rectangle(
  matterContainer.clientWidth + 30,
  matterContainer.clientHeight / 2,
  60,
  27184,
  { isStatic: true }
);

let objects = [];
for (let i = 0; i < amount; i++) {
  objects.push(
    Matter.Bodies.rectangle(
      Math.random() * matterContainer.clientWidth,
      Math.random() * matterContainer.clientHeight,
      Math.random() * size,
      Math.random() * size,
      {
        restitution: 0.8,
        render: {
          fillStyle: colors[Math.floor(Math.random() * colors.length)],
        },
      }
    )
  );
}

// do the same with circles
for (let i = 0; i < amount; i++) {
  objects.push(
    Matter.Bodies.circle(
      Math.random() * matterContainer.clientWidth,
      Math.random() * matterContainer.clientHeight,
      Math.random() * size,
      {
        restitution: 0.8,
        render: {
          fillStyle: colors[Math.floor(Math.random() * colors.length)],
        },
      }
    )
  );
}
// do the same with triangles
for (let i = 0; i < amount; i++) {
  objects.push(
    Matter.Bodies.polygon(
      Math.random() * matterContainer.clientWidth,
      Math.random() * matterContainer.clientHeight,
      3,
      Math.random() * size,
      {
        restitution: 0.8,
        render: {
          fillStyle: colors[Math.floor(Math.random() * colors.length)],
        },
      }
    )
  );
}

objects.push(
  Matter.Bodies.rectangle(
    Math.random() * matterContainer.clientWidth,
    500,
    500,
    70,
    {
      restitution: 0.8,
      render: {
        fillStyle: "transparent",
        text: {
          content: "Soupon2gou",
          color: "#2196F3",
          size: 50,
          family: "Arial",
        },
      },
    }
  )
);

objects.push(
  Matter.Bodies.rectangle(
    Math.random() * matterContainer.clientWidth,
    10,
    450,
    60,
    {
      restitution: 0.8,
      render: {
        fillStyle: "transparent",
        text: {
          content: "Hello, World!",
          color: "#9C27B0",
          size: 32,
          family: "Tahoma",
        },
      },
    }
  )
);
objects.push(
  Matter.Bodies.rectangle(
    Math.random() * matterContainer.clientWidth,
    400,
    350,
    40,
    {
      restitution: 0.8,
      render: {
        fillStyle: "transparent",
        text: {
          content: "Feb 25th, 2024",
          color: "#E91E63",
          size: 32,
          family: "Arial",
        },
      },
    }
  )
);

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: { visible: false },
  },
});
render.mouse = mouse;

Matter.World.add(engine.world, [
  ground,
  leftWall,
  rightWall,
  mouseConstraint,
  ...objects,
]);

Matter.Runner.run(engine);
Matter.Render.run(render);

