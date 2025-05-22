---
title: Prakriya '22 Souvenir
date: 2022-04-02 00:00:00 +0530
tags:
- 3d printing
- blender
- gimp
category: Misc
image:
  path: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSFO8Lp9Speof6tzytzzA9D7GP7-3puLh-o3AiWWcu9gkMBr7QHK0TDtI8RCKTn3lCi3OJMb96WPS_fwV2c75GGg77Ry6ipOTKA-CPx-VR_sJkOFeHDBniqVniqVeB7AIo5Z7SzVt6Se3pYukNOtk8AiZqMF3kuPdTquN3_MZiWnyGnr_awSGNuQD5D-s/s1200/prakriya-tree.png
---

I completed my Class X from [Prakriya Green Wisdom School](https://prakriyaschool.edu.in){:target="_blank"}. There were five houses in Prakriya named after the five elements of nature - Prithvi (Earth), Jal (Water), Agni (Fire), Vayu (Air) and Aakash (Sky). All students belonged to one of these houses.

As a parting souvenir, I 3D printed a model of a tree (as a reflection of our growth over the previous decade in Prakriya) with the five houses as five different parts of the tree. The model had 3 layers - the back, which showed all the student and teacher names, the middle which showed all the student names as per their houses and the top layer where each of my classmates took their engraved names to be used as a souvenir or a keychain. We left the remainder of the tree in the school.

Here is an interactive version of that model:

<p id="text" style="text-align: center;">Loading Interactive Model...</p>
<div id="im" style="height:400px;width:100%;border:1px solid;"></div>
<p style="text-align: center;">You can rotate, zoom and interact with the model above</p>

<script src="/assets/js/three.min.js"></script>
<script src="/assets/js/GLTFLoader.js"></script>
<script src="/assets/js/OrbitControls.js"></script>
<script src="/assets/js/DRACOLoader.js"></script>

<script>
    let scene, camera, renderer;

    function init() {
        THREE.Cache.enabled = true;
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdddddd);

        const container = document.getElementById('im');
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000);
        camera.position.set(0, 0, height / 1.3);

        const pL1 = new THREE.PointLight(0xffffff, 1, 0);
        pL1.position.set(0, 0, 10000);
        scene.add(pL1);

        const pL2 = new THREE.PointLight(0xffffff, 1, 0);
        pL2.position.set(0, 0, -10000);
        scene.add(pL2);

        const pL3 = new THREE.PointLight(0xffffff, 0.5, 0);
        pL3.position.set(0, 10000, 0);
        scene.add(pL3);

        const pL4 = new THREE.PointLight(0xffffff, 0.5, 0);
        pL4.position.set(0, -10000, 0);
        scene.add(pL4);

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1;

        const loader = new THREE.GLTFLoader();
        const dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('/assets/draco/');
        loader.setDRACOLoader(dracoLoader);

        loader.load('/assets/data/prakriya-souvenir.glb', function(glb){
            tree = glb.scene.children[0];
            tree.position.set(0, -80, 0);
            scene.add(glb.scene);
            animate();
            document.getElementById("text").innerText = "Interactive Model";
        });
    }

    window.onresize = function () {
        const container = document.getElementById('im');
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
        controls.update();
    }

    init();
</script>

I used [Gimp](https://www.gimp.org){:target="_blank"} to create the reference image, text and shapes and created SVGs out of them for use in Blender:

![prakriya-souvenir-gimp](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkNwEMeeanrdQs9rmpeVzlb43hp_rSkxR6iL-XAJCYRTTQItbNN9SIaLpudmutjGWYZzlvo8XFTyL89M782xxqCRKgy12blcW-DqmhQgYeKbYn4UFrPUEtHhrIwzIOpDVc_Ups8_yE-UkQypHaVr8lxFAJlpFHJCEwcGyaaIKDCzbiD28dQUvSQanQd1s/s2464/prakriya-tree-gimp.png)
_References created in GIMP_

I imported the SVGs into [Blender](https://www.blender.org){:target="_blank"} and with a bit of scripting and modelling, I created all the separate parts:

![prakriya-souvenir-blender](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC6m3rqVjx0zlYb_3YGc6k8LiLOY2RYv7tWqPfcNvWmL-Ebm7lhIh3AtlU1uPaPsZLJ_HcPfiBSPQMaDssjJDkq8RIzSuOieLIotXcXbO8v5bPIEMLaeqjyXuD1hNnJAUSatyxENSC29t5hRx26Ksj3pPstMjpVgnmtR25LZIhJH2i-ho6m3LJZCsWD2s/s2456/prakriya-tree-blender.png)
_Final 3D printable parts in Blender_

Here are a few images of the 3D printed souvenir:

![prakriya-souvenir-photo-1](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz_CGKxd_0Za1aYkZiIEcJ-YmyzR6xRtvLEXz7XNxLpurysiut8E0kvmWnpa-VXicNrSwILooWd2B3Zy4W_06DAyNdRS2SfbtDzdzIhsvbsMr_8cW_a4ZFWQPdnwcQETQQ2sbB_tEx2yDIevsaeY41Z93T7fQ0ULHszA-k32t0EjQzKibRjfafmoWIdxk/s2000/pgs_photo1.jpg)
_The model we left in School_

![prakriya-souvenir-photo-2](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFK1AJtsjknOnqwRbA5-zsLNzYmwuz_huTdiYvFqVLlLoY5bXoXfyqtRF10pV217l47w9PshzudPlB_Lrww0iJboHzoK_wVbMNWrm9FWKhPIH-vkCqh-lkI6jkXDqDYI4TIHOsRql0_Qq0FCs4HrW71INEoEAdiJ5U28aOYHqfVRGA0fWOn5dc9mfwOoQ/s2000/pgs_photo2.jpg)
_Back showing teacher names_

![prakriya-souvenir-photo-1](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0U4gKB1MZtL3RfB6gs6WEJPUboaeOs-cmCNGhYWdMEtZJnWidzfR4wPTbdmLJAPukLchedXWTXCxGQpBBW8DousTTj33lMCatyyKp1w4I9xoS6q5VfDz0n3DPK0Y_AOW0oyvHNK-GGVw9nn0Fc4lZMYN8Clw7Wdp72xfaY8HSnl0fX_d8KA7-eqDmbqs/s2000/pgs_photo3.jpg)
_Model with all student pieces in place_

Here are a few closeups of the model:

![prakriya-souvenir-closeup-1](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivuSyfADcGOIgjHnOtVvqN_tnXhnKStysgkyExEB1Hw2OlHY8ACAXFkqhWGc0s9ix1xqxiemZpOnREO84vk8fN7zjhFuU19PLtkfgRNTotfksUjdJ_9ubDRfxtosqOgLjF1UtmmWmfuBwYZ3U7-js7OhM1pn8AI1rgtn_BsXptJ80evJgOcASYJW06hSQ/s1500/pgs-closeup-1.jpg)
_A closer view_

![prakriya-souvenir-closeup-2](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1Ng1e9lWnhC8GtSmpNKzytrNU17slG8NzqYpBoPLByrlERKpaNtz6SQlWJ6akJLchabuSnQS8QC6o6PHdj8dj5zjyOgWJ1kLoMSdjkxyNGvkvZd-juEFVYjzQaWSayC-v1TWe0pRE_1M3ACbL8N_AsKBBHs6uRZIw9xoFQ5fEsY2Ek3iItHXRRX870CY/s1500/pgs-closeup-2.jpg)
_Another closeup view_

This was one of my earliest projects involving Blender, a bit of Python scripting in Blender and 3D printing.
