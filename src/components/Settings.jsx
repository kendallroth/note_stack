// File:	src/components/Settings.jsx
// Purpose:	Settings presentational component

import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

/**
 * Settings form and modal
 * @param {Boolean} isSettingsShown			Whether the setting modal is shown (UNUSED)
 * @param {Function} onSettingsClick		Click event handler for modal display button
 * @param {Function} onSettingsCancelClick	Click event handler for modal cancel button
 * @param {Function} handleSubmit			Event handler expected by redux-form (calls the onSubmit event from container)
 */
let Settings = ({
	isSettingsShown,
	onSettingsClick,
	onSettingsCancelClick,
	handleSubmit
}) => {
	return (
		<div className='settings'>
			<a href='#' onClick={onSettingsClick}>
				<i className='fi-widget'></i>
			</a>
			<form className='reveal tiny settings-modal' id='settings-modal'
				onSubmit={ handleSubmit } data-reveal
				data-close-on-click='false' data-close-on-esc='false'
			>
				<h2>Settings</h2>
				<div className='row'>
					<div className='column'>
						<label>Sort order:</label>
						<div className='switch small'>
							<Field type='checkbox' name='order' component='input' id='settings-order' className='switch-input' />
							<label className='switch-paddle' htmlFor='settings-order'>
								<span className='show-for-sr'>Sort Order</span>
								<span className='switch-active' aria-hidden='true'>A</span>
								<span className='switch-inactive' aria-hidden='true'>D</span>
							</label>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='column'>
						<label htmlFor='settings-limit'>Limit</label>
						<Field type='number' name='limit' component='input' placeholder='Limit' min='0' max='100' />
					</div>
					<div className='column'>
						<label htmlFor='settings-offset'>Start</label>
						<Field type='number' name='offset' component='input' placeholder='Start' min='0' max='100' />
					</div>
				</div>
				<div className='row'>
					<div className='column'>
						<a href='#' className='button secondary' onClick={onSettingsCancelClick}>
							<i className='fi-x'></i>
							&ensp;Cancel
						</a>
					</div>
					<div className='column'>
						<button type='submit' className='button primary'>
							<i className='fi-check'></i>
							&ensp;Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

Settings.propTypes = {
	isSettingsShown: PropTypes.bool,
	onSettingsClick: PropTypes.func.isRequired,
	onSettingsCancelClick: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

//Set up the redux-form binding to the unique id 'settings'
Settings = reduxForm({
	form: 'settings',
	enableReinitialize: true
})(Settings);

export default Settings;
