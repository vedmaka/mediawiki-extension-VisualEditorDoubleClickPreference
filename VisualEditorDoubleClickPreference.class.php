<?php

class VisualEditorDoubleClickPreference {

	public static function onRegistration() {
		global $wgResourceModules;
		$wgResourceModules['mediawiki.action.view.dblClickEdit']['scripts'] = 'extensions/VisualEditorDoubleClickPreference/script.js';
	}

}