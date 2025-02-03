import ConnectedAccounts from "../components/profile/ConnectedAccounts";
import DangerZone from "../components/profile/DangerZone";
import Notifications from "../components/profile/Notifications";
import Profile from "../components/profile/Profile";
import Security from "../components/profile/Security";
import Header from "../components/share/Header";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;