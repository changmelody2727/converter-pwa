if(!self.define){let e,a={};const i=(i,o)=>(i=new URL(i+".js",o).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let s={};const t=e=>i(e,n),c={module:{uri:n},exports:s,require:t};a[n]=Promise.all(o.map((e=>c[e]||t(e)))).then((e=>(r(...e),s)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4331e5e7f319fa59ca5d2b2b0c1d384c"},{url:"/_next/static/I1LcN7ztwlFEqAN-88XbX/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/I1LcN7ztwlFEqAN-88XbX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/118.caa5b1a6bda142ba.js",revision:"caa5b1a6bda142ba"},{url:"/_next/static/chunks/202.43134f6cdf445ce4.js",revision:"43134f6cdf445ce4"},{url:"/_next/static/chunks/285-acacf2b72951262d.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/503-ec28bf2edd1e3e7a.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/577-b4f5dbbffc87300f.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/618.a285dedb4caa4ffb.js",revision:"a285dedb4caa4ffb"},{url:"/_next/static/chunks/69-4531462ecbc3fa4f.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/706-ed110d0d43d26604.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/74.5b374365dba9250d.js",revision:"5b374365dba9250d"},{url:"/_next/static/chunks/908-0776e511625b4566.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/app/%5Blocale%5D/count-days/page-135e67bca5fe4144.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-718c54d70428a084.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-3fa682ae41c1b714.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/app/_not-found-b540d42a19b7f579.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/fd9d1056-308de1de16be2e90.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/main-app-f69a68c965c02f21.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/main-e282449551051d3f.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-376a54050126ee89.js",revision:"I1LcN7ztwlFEqAN-88XbX"},{url:"/_next/static/css/cd583026904a49f9.css",revision:"cd583026904a49f9"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f-s.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/4a8324e71b197806-s.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/71ba03c5176fbd9c-s.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/83e4d81063b4b659-s.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99-s.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/de9eb3a9f0fa9e10-s.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/math-logo.3e2a8db2.svg",revision:"7e792e3f439af1b5817373185aa65493"},{url:"/_next/static/media/roboto-cyrillic-300-normal.17dc3449.woff",revision:"17dc3449"},{url:"/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2",revision:"88798412"},{url:"/_next/static/media/roboto-cyrillic-400-normal.19f93502.woff",revision:"19f93502"},{url:"/_next/static/media/roboto-cyrillic-400-normal.2d9c9d60.woff2",revision:"2d9c9d60"},{url:"/_next/static/media/roboto-cyrillic-500-normal.6e4060e5.woff",revision:"6e4060e5"},{url:"/_next/static/media/roboto-cyrillic-500-normal.aa68ea54.woff2",revision:"aa68ea54"},{url:"/_next/static/media/roboto-cyrillic-700-normal.1ea775f3.woff",revision:"1ea775f3"},{url:"/_next/static/media/roboto-cyrillic-700-normal.258a358e.woff2",revision:"258a358e"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2",revision:"cd7c5715"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.de365ce5.woff",revision:"de365ce5"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.02e18372.woff",revision:"02e18372"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.d7827ae3.woff2",revision:"d7827ae3"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a05054d8.woff",revision:"a05054d8"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a1b5c90d.woff2",revision:"a1b5c90d"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.46ca43b3.woff",revision:"46ca43b3"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.dd3651fb.woff2",revision:"dd3651fb"},{url:"/_next/static/media/roboto-greek-300-normal.122e04f2.woff",revision:"122e04f2"},{url:"/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2",revision:"25dc89b0"},{url:"/_next/static/media/roboto-greek-400-normal.63e6dc18.woff2",revision:"63e6dc18"},{url:"/_next/static/media/roboto-greek-400-normal.e3b5876b.woff",revision:"e3b5876b"},{url:"/_next/static/media/roboto-greek-500-normal.533b03d2.woff2",revision:"533b03d2"},{url:"/_next/static/media/roboto-greek-500-normal.55bbf615.woff",revision:"55bbf615"},{url:"/_next/static/media/roboto-greek-700-normal.432b858b.woff2",revision:"432b858b"},{url:"/_next/static/media/roboto-greek-700-normal.b3d9786c.woff",revision:"b3d9786c"},{url:"/_next/static/media/roboto-greek-ext-300-normal.69dd9b06.woff",revision:"69dd9b06"},{url:"/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2",revision:"bc5ce703"},{url:"/_next/static/media/roboto-greek-ext-400-normal.2b547ded.woff2",revision:"2b547ded"},{url:"/_next/static/media/roboto-greek-ext-400-normal.d17f5f2b.woff",revision:"d17f5f2b"},{url:"/_next/static/media/roboto-greek-ext-500-normal.7ea6cffa.woff2",revision:"7ea6cffa"},{url:"/_next/static/media/roboto-greek-ext-500-normal.fcc37f63.woff",revision:"fcc37f63"},{url:"/_next/static/media/roboto-greek-ext-700-normal.950178dd.woff",revision:"950178dd"},{url:"/_next/static/media/roboto-greek-ext-700-normal.a8d16efd.woff2",revision:"a8d16efd"},{url:"/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2",revision:"a4eae32d"},{url:"/_next/static/media/roboto-latin-300-normal.dbb78523.woff",revision:"dbb78523"},{url:"/_next/static/media/roboto-latin-400-normal.d6d4cf7b.woff",revision:"d6d4cf7b"},{url:"/_next/static/media/roboto-latin-400-normal.f2894edc.woff2",revision:"f2894edc"},{url:"/_next/static/media/roboto-latin-500-normal.3170fd9a.woff2",revision:"3170fd9a"},{url:"/_next/static/media/roboto-latin-500-normal.cdad2023.woff",revision:"cdad2023"},{url:"/_next/static/media/roboto-latin-700-normal.71b2beb8.woff2",revision:"71b2beb8"},{url:"/_next/static/media/roboto-latin-700-normal.f3ddaf9d.woff",revision:"f3ddaf9d"},{url:"/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2",revision:"37d4965d"},{url:"/_next/static/media/roboto-latin-ext-300-normal.b9b4688a.woff",revision:"b9b4688a"},{url:"/_next/static/media/roboto-latin-ext-400-normal.21abc8c8.woff2",revision:"21abc8c8"},{url:"/_next/static/media/roboto-latin-ext-400-normal.a58384ff.woff",revision:"a58384ff"},{url:"/_next/static/media/roboto-latin-ext-500-normal.41845160.woff",revision:"41845160"},{url:"/_next/static/media/roboto-latin-ext-500-normal.85ebfb55.woff2",revision:"85ebfb55"},{url:"/_next/static/media/roboto-latin-ext-700-normal.6af98c24.woff2",revision:"6af98c24"},{url:"/_next/static/media/roboto-latin-ext-700-normal.b6be88e2.woff",revision:"b6be88e2"},{url:"/_next/static/media/roboto-vietnamese-300-normal.44e9a722.woff",revision:"44e9a722"},{url:"/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2",revision:"b3d3e960"},{url:"/_next/static/media/roboto-vietnamese-400-normal.b339d926.woff",revision:"b339d926"},{url:"/_next/static/media/roboto-vietnamese-400-normal.c95fc061.woff2",revision:"c95fc061"},{url:"/_next/static/media/roboto-vietnamese-500-normal.65b57a7f.woff",revision:"65b57a7f"},{url:"/_next/static/media/roboto-vietnamese-500-normal.7f8c0554.woff2",revision:"7f8c0554"},{url:"/_next/static/media/roboto-vietnamese-700-normal.72bf832f.woff2",revision:"72bf832f"},{url:"/_next/static/media/roboto-vietnamese-700-normal.82ca662a.woff",revision:"82ca662a"},{url:"/ads.txt",revision:"7fbff5a5a16fccd43be47a1ba43d1e25"},{url:"/android/android-launchericon-144-144.png",revision:"abed8007fad1aef1663eed126a8f58f5"},{url:"/android/android-launchericon-192-192.png",revision:"ce95359b6f379f8a21b027923451f6fa"},{url:"/android/android-launchericon-48-48.png",revision:"226bcf602d72a8076c5cd38d49b8b453"},{url:"/android/android-launchericon-512-512.png",revision:"aa8c7dc0c7ec9f213971d843fd180c31"},{url:"/android/android-launchericon-72-72.png",revision:"098b0e4c5c824302f7b9c18711a500ec"},{url:"/android/android-launchericon-96-96.png",revision:"aef6ebfaff30194cdfb4980fe38543ac"},{url:"/ios/100.png",revision:"821e90998e2322f2d537bc8d75016994"},{url:"/ios/1024.png",revision:"219831a7ffcdfe6a6b36d7aea75c03a9"},{url:"/ios/114.png",revision:"3be4474d859f17f857d12795d02c82b0"},{url:"/ios/120.png",revision:"33b2fe0515b8628dddf7b89cde4a15fe"},{url:"/ios/128.png",revision:"84f2846e3cfe9e7a42ea0467a866edf2"},{url:"/ios/144.png",revision:"abed8007fad1aef1663eed126a8f58f5"},{url:"/ios/152.png",revision:"7fc0d380b0f0fc37ca8fb8851d325102"},{url:"/ios/16.png",revision:"1b03465327a674a3df5d7e58331a02bc"},{url:"/ios/167.png",revision:"01bece780add98bd4c56c0af329668e7"},{url:"/ios/180.png",revision:"d7c646b842290956efbf03e5513a51e2"},{url:"/ios/192.png",revision:"ce95359b6f379f8a21b027923451f6fa"},{url:"/ios/20.png",revision:"deac0211561b429097763f9b722999c7"},{url:"/ios/256.png",revision:"7985dd230f67ec3f8e086f1e9b87b604"},{url:"/ios/29.png",revision:"c51ae9a2d9e08e060e86a03182f3e6d8"},{url:"/ios/32.png",revision:"81d8295f5ad1b062fcdb722d1d81187e"},{url:"/ios/40.png",revision:"38c3a6c5c4e5fdd9e74d746d6a24b664"},{url:"/ios/50.png",revision:"c51615897812b7bc6f74e286bbc5e17e"},{url:"/ios/512.png",revision:"aa8c7dc0c7ec9f213971d843fd180c31"},{url:"/ios/57.png",revision:"8c25f1ed85867a66ee3f77ee8f8499a1"},{url:"/ios/58.png",revision:"fd30c53d804a6dca45f618950b329915"},{url:"/ios/60.png",revision:"3d05a59b72310b76f158a15458f62824"},{url:"/ios/64.png",revision:"4da505fcb895e214fbdcf4d03e672b58"},{url:"/ios/72.png",revision:"098b0e4c5c824302f7b9c18711a500ec"},{url:"/ios/76.png",revision:"1843d80257b9ec834e0da385302d613c"},{url:"/ios/80.png",revision:"a69f086a0c1c6c108aeb22f1182bd1fb"},{url:"/ios/87.png",revision:"def47b62a58eb92cb83444977d038905"},{url:"/manifest.json",revision:"b067c1353347734f71c2aff939a7f119"},{url:"/math-logo.svg",revision:"7e792e3f439af1b5817373185aa65493"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"236ba691eb28830f1a130c6f4303226d"},{url:"/windows11/LargeTile.scale-125.png",revision:"58f5903d45666cc6752d2be0ae09c2cf"},{url:"/windows11/LargeTile.scale-150.png",revision:"44b5665bdc3783f69facc6bd405c210d"},{url:"/windows11/LargeTile.scale-200.png",revision:"ac712f1420ba897558b520b98749ff8a"},{url:"/windows11/LargeTile.scale-400.png",revision:"26754ced767438a72eebe9e7d21f4a5d"},{url:"/windows11/SmallTile.scale-100.png",revision:"cf6c87186aa0ac423670755c4554f4a4"},{url:"/windows11/SmallTile.scale-125.png",revision:"e8a646836662888152c7b94bf871d6c4"},{url:"/windows11/SmallTile.scale-150.png",revision:"d5db7c5a5bf64b34a85b01f08fbbb7d9"},{url:"/windows11/SmallTile.scale-200.png",revision:"59e8981113b06a312077452b9de2b86b"},{url:"/windows11/SmallTile.scale-400.png",revision:"aa9f515cd825d0ef25ff3a61f7cf8829"},{url:"/windows11/SplashScreen.scale-100.png",revision:"c33aa12f0ea370bbce97014a55bfb54f"},{url:"/windows11/SplashScreen.scale-125.png",revision:"39a193995477dc4b3106489ad6d05409"},{url:"/windows11/SplashScreen.scale-150.png",revision:"417c61ab35820ed597144d02426ed8df"},{url:"/windows11/SplashScreen.scale-200.png",revision:"f67cbf5b8aca5092179ecf89f5bb8271"},{url:"/windows11/SplashScreen.scale-400.png",revision:"f07b07b846a558c243276318617cd9c0"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"22b57cf76338fa3eec22fbe57cf90bef"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"b2173f194f1a12570d083e62dfd1ce9b"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"f2f2b7d129b4261c305075803d42d833"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"7d2f0fb909b11f413e20c39f54b71128"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"0e98fa18f7f58e715d221e51646c4e4a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"b2bd6595065eb9bb3a7fc896be4cf962"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"827a2cf5242f71bbf190061e1a22200a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"c2bc2405e2532fcfe9850b2021c5b69e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"6dd0742f06cabda56321674bcbb6d4ec"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"ebd6baf60342b29788f971e9dd98a679"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"9b1c7bb94458f763d2a856f1361205fb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"55b239d0e3cfdf5969f998492e7a3184"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"3594d51740437d22290b324282f88e0c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"f9b3b14690391507d23da9789a1045e5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"33a54078a981f6e440fd47fac44db1a0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"86e954ffca4df4b6d4028892e5be46cc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"14923d7d12d3a968cfaae0927412be21"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"882d8ab1283d78fa51ea00aae752f1ae"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"6bb335c85b328b0c949e98937bbb4b8c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"5452a877259e7c58b59426f805ecfc1c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"b2bd6595065eb9bb3a7fc896be4cf962"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"827a2cf5242f71bbf190061e1a22200a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"c2bc2405e2532fcfe9850b2021c5b69e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"6dd0742f06cabda56321674bcbb6d4ec"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"ebd6baf60342b29788f971e9dd98a679"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"9b1c7bb94458f763d2a856f1361205fb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"55b239d0e3cfdf5969f998492e7a3184"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"3594d51740437d22290b324282f88e0c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"f9b3b14690391507d23da9789a1045e5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"33a54078a981f6e440fd47fac44db1a0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"86e954ffca4df4b6d4028892e5be46cc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"14923d7d12d3a968cfaae0927412be21"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"882d8ab1283d78fa51ea00aae752f1ae"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"6bb335c85b328b0c949e98937bbb4b8c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"5452a877259e7c58b59426f805ecfc1c"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"f9b3b14690391507d23da9789a1045e5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"4829b0e6ca2f5ae04cdafcb7fe872856"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"0cd6d3ff13fce57e074a77df5eb0668a"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"37bbbe1a1ff46da97d3604071fdbd9a2"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"a0e71544f77d36d7bdbd3c260c80c727"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"b2bd6595065eb9bb3a7fc896be4cf962"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"827a2cf5242f71bbf190061e1a22200a"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"c2bc2405e2532fcfe9850b2021c5b69e"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"6dd0742f06cabda56321674bcbb6d4ec"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"ebd6baf60342b29788f971e9dd98a679"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"9b1c7bb94458f763d2a856f1361205fb"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"55b239d0e3cfdf5969f998492e7a3184"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"3594d51740437d22290b324282f88e0c"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"f9b3b14690391507d23da9789a1045e5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"33a54078a981f6e440fd47fac44db1a0"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"86e954ffca4df4b6d4028892e5be46cc"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"14923d7d12d3a968cfaae0927412be21"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"882d8ab1283d78fa51ea00aae752f1ae"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"6bb335c85b328b0c949e98937bbb4b8c"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"5452a877259e7c58b59426f805ecfc1c"},{url:"/windows11/StoreLogo.scale-100.png",revision:"c51615897812b7bc6f74e286bbc5e17e"},{url:"/windows11/StoreLogo.scale-125.png",revision:"ac102e6fa0715bf92d57bfb82ca5e262"},{url:"/windows11/StoreLogo.scale-150.png",revision:"d90594a61c63aa2363bacfc126aa43a6"},{url:"/windows11/StoreLogo.scale-200.png",revision:"821e90998e2322f2d537bc8d75016994"},{url:"/windows11/StoreLogo.scale-400.png",revision:"82e016623d1ea9dde0351fab3cafbb35"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"42a273b6ba415907d3142ebbee5bb5d0"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"cf55a82674faab61d8a9e319635cf119"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"0cb4edaab02a2f3f81f433f35971acea"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"c33aa12f0ea370bbce97014a55bfb54f"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"f67cbf5b8aca5092179ecf89f5bb8271"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:o})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
