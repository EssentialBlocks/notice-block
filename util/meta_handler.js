//Update Meta
wp.data.subscribe(function () {
    var isSavingPost = wp.data.select('core/editor').isSavingPost();
    var isAutosavingPost = wp.data.select('core/editor').isAutosavingPost();
  
    if (isSavingPost && !isAutosavingPost) {
        const post_id = wp.data.select("core/editor").getCurrentPostId();
        const all_blocks = wp.data.select("core/editor").getBlocks();

        let styles = {};
        all_blocks.forEach((item) => {
			styles = {...styles, ...{[item.attributes.blockId]: item.attributes}};
        });
        console.log("Updated Style", styles);
        jQuery.ajax({
            type: "POST",
            url: ajaxurl,
            data: {data: JSON.stringify(styles), id: post_id, action: "update_style_meta"},
            success: function(msg){
                 console.log("Success");
            }
        });
    }
});