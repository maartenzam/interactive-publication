export default	function calculateGraph(pagesData, depth, root, secondaryModules) {
		let trainingNodes = secondaryModules
			? [...new Set(pagesData.map((d) => d.t1).concat(pagesData.map((d) => d.t2)))].filter((d) => d)
			: [...new Set(pagesData.map((d) => d.t1))].filter((d) => d);
		let moduleNodes = secondaryModules
			//? [...new Set(pagesData.map((d) => d.m1).concat(pagesData.map((d) => d.m2)))].filter((d) => d)
			? [...new Set(pagesData.map((d) => d.m1))].filter((d) => d)
			: [...new Set(pagesData.map((d) => d.m1))].filter((d) => d)
		let pageNodes = pagesData.map((d) => d.slug);

		let nodes = trainingNodes
			.map((d) => {
				return { id: d, depth: 1 };
			})
        if(depth > 1){
            nodes = nodes.concat(
				moduleNodes.map((d) => {
					return { id: d, depth: 2 };
				})
			)
        }
        if(depth > 2){
            nodes = nodes.concat(
				pageNodes.map((d) => {
					return { id: d, depth: 3 };
				})
			)
        }
        if(root){
            nodes = nodes.concat([{ id: 'root', depth: 0 }]);
        }

		let edges = [];

		// Trainings to root edges
        if(root){
            trainingNodes.forEach((d) => {
                edges.push({ source: d, target: 'root', depth: 0 });
            });
        }

		pagesData.forEach((d) => {
			// m1 to t1 edges
            if(depth > 1){
                let obj = {};
                obj.source = d.m1;
                obj.target = d.t1;
                obj.depth = 1;
                edges.push(obj);

                if (d.m2 && secondaryModules && d.t2 == "Design principles") {
			    	let obj2 = {};
			    	obj2.source = d.m2;
			    	obj2.target = d.t2;
			    	obj2.depth = 1;
			    	edges.push(obj2);
                }
            }

			// page to module edges
            if(depth > 2){
                // page to m1 edges
                let objTitle = {};
			    objTitle.source = d.slug;
			    objTitle.target = d.m1;
			    objTitle.depth = 2;
			    edges.push(objTitle);

                if(d.m2 && secondaryModules && d.t2 == "Design principles"){
                    let objTitle2 = {};
			    	objTitle2.source = d.slug;
			    	objTitle2.target = d.m2;
			    	objTitle2.depth = 2;
			    	edges.push(objTitle2);
                }
            }
			// If a page has one or more metatags
			/*if (d.metatags) {
			let tags = d.metatags.split(', ');
			tags.forEach((t) => {
				let obj = {};
				obj.source = d.title;
				obj.target = t;
				obj.depth = 4;
				edges.push(obj);
			});
		}*/
		});
		let uniqueEdges = edges.filter(
				(v, i, a) => a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
			);
    return {nodes: nodes, edges: uniqueEdges}
	}