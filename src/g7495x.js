const g7495x=(aidText='By')=>{
	const href='https://twitter.com/g7495x'
	const source='https://g7495x.github.io/WebGL-G7495x-Signature---Three.js/src'

	const piBy180=Math.PI/180
	const twoPi=Math.PI*2
	const piByTwo=Math.PI/2

	const ele=document.createElement('a')
	ele.id='G7495x'
	ele.href=href
	ele.target='_blank'
	document.body.appendChild(ele)

	const renderer=new THREE.WebGLRenderer({
		antialias:             true,
		alpha:                 true,
		preserveDrawingBuffer: true,
	})
	renderer.setSize(100,100)
	renderer.setPixelRatio(window.devicePixelRatio)
	ele.appendChild(renderer.domElement)

	window.addEventListener('resize',()=>{
		renderer.setPixelRatio(window.devicePixelRatio)
	},true)

	const scene=new THREE.Scene()
	const camera=new THREE.PerspectiveCamera(45,1,.01,1000)
	camera.position.set(0,0,10)
	camera.lookAt(0,0,0)

	const pointLight=new THREE.PointLight(0xffffff)
	pointLight.position.set(10,10,10)
	scene.add(pointLight)

	const ambientLight=new THREE.AmbientLight(0xffffff,.75)
	scene.add(ambientLight)

	const material=new THREE.MeshStandardMaterial({color: 0xffffff})

	let obj
	const objLoader=new THREE.OBJLoader()
	objLoader.load(
		source+'/models/g7495x.obj',
		(o)=>{
			obj=o
			obj.children[0].scale.set(.001,.001,.001)
			obj.children[0].position.set(-1.500,-1.500,0)
			obj.children[0].material=material
			scene.add(obj)

			then=start=new Date().getTime()/1000
			animate()
		},
		(xhr)=>  { console.log('G7495x - '+(xhr.loaded/xhr.total*100)+'% loaded') },
		(error)=>{ console.error('G7495x - Error!\n',error) },
	)

	let start
	let then
	const animate=()=>{
		const now=new Date().getTime()/1000
		const time=now-start

		if(time<5){
			const z=1-Math.pow(time/5,.25)
			const s=1-z*z
			obj.rotation.z=z
			obj.scale.set(s,s,s)
		}else{
			obj.rotation.z=0
			obj.scale.set(1,1,1)

			const r=time%10
			if(r<=5){
				const s=Math.sin(piByTwo*(r/5))
				obj.rotation.y=-twoPi*s*s
			}else{ obj.rotation.y=0 }
		}

		renderer.render(scene,camera)
		requestAnimationFrame(animate)
	}

	const img=document.createElement('img')
	img.src=source+'/imgs/name.png'
	ele.appendChild(img)

	const bg=document.createElement('div')
	ele.appendChild(bg)

	const aid=document.createElement('div')
	aid.innerHTML=aidText
	ele.appendChild(aid)

	ele.style=`
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 35px;
		left: -20px;
		width: 150px;
		height: 30px;
	`
	img.style=`
		margin-top: 2px;
		margin-left: -33.5px;
		height: 35px;
	`
	bg.style=`
		z-index: -1;
		display: block;
		transform: skewX(-45deg);
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-width: 1px 1.5px;
		border-style: solid;
		border-color: rgba(255,255,255,.1);
		border-radius: 5px 7.5px;
		background: rgba(0,0,0,.75) linear-gradient(to right,rgba(255,255,255,.075),rgba(255,255,255,.0125) 50%) no-repeat;
		background: rgba(0,0,0,.75) linear-gradient(30deg,rgba(255,255,255,.15),rgba(255,255,255,.0375) 50%,rgba(255,255,255,.01) 50%) no-repeat;
	`
	aid.style=`
		position: absolute;
		bottom: 32px;
		left: 77px;
		color: gray;
		font-size: 7px;
	`
}
