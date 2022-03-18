const  {Scene,PerspectiveCamera,WebGLRenderer} = THREE

let FOV         = 75 //Feild of view

let VF_near     = 0.1          // View Frustum
let VF_far      = 1000

function initThree(canvasID){
    const canvas = $('#'+canvasID)

    const scene  = new Scene();

    const camera = new PerspectiveCamera(FOV,window.innerWidth/window.innerHeight,VF_near,VF_far); //width/height = aspect ratio

    const render = new WebGLRenderer({canvas})

    render.setPixalRatio(window.devicePixelRatio)
    render.setSize(window.innerWidth,window.innerHeight)
    render.position.setZ(30)

    render.render(scene,camera)

    return {
        scene,
        camera,
        render
    }
}