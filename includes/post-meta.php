<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Notice_Post_Meta
{
    public function __construct()
    {
        add_action('init', array($this, 'register_meta'));
    }

    /**
     * Register meta
     */
    public function register_meta()
    {
        register_meta(
            'post',
            '_eb_attr',
            array(
                'show_in_rest' => true,
                'type' => 'string',
                'single' => true,
                'sanitize_callback' => 'sanitize_text_field',
                'auth_callback' => [$this, 'auth_callback'],
            )
        );
        register_meta(
            'post',
            'eb_css',
            array(
                'show_in_rest' => true,
                'type' => 'string',
                'single' => true,
                'auth_callback' => [$this, 'auth_callback'],
            )
        );
    }

    /**
     * Determine if the current user can edit the post the meta belongs to.
     *
     * @param bool   $allowed  Whether the user can add the post meta.
     * @param string $meta_key The meta key.
     * @param int    $post_id  Post ID.
     * @return bool True when the user can edit this post, else false.
     */
    public function auth_callback($allowed = false, $meta_key = '', $post_id = 0)
    {
        return $post_id ? current_user_can('edit_post', $post_id) : current_user_can('edit_posts');
    }
}

new Notice_Post_Meta();
