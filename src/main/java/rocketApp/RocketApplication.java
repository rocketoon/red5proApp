package rocketApp;

import org.red5.server.adapter.MultiThreadedApplicationAdapter;
import org.red5.server.api.IConnection;
import org.red5.server.api.scope.IScope;

public class RocketApplication extends MultiThreadedApplicationAdapter {

	@Override
	public boolean appConnect(IConnection conn, Object[] params) {
		String host = conn.getHost();
		String remoteAddress = conn.getRemoteAddress();
		log.info(" >>>>>>>>>>>>>>>>>>>>>>>>>>> New connection: {}, {}", host, remoteAddress);
		return super.appConnect(conn, params);
	}

	@Override
	public void appDisconnect(IConnection conn) {
		log.info("appDisconnect");
		super.appDisconnect(conn);
	}

	@Override
	public boolean appStart(IScope arg0) {
		log.info("appStart");
		registerStreamPublishSecurity((scope, name, mode) -> {
			log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CHECKING BROADCAST SECURITY: {}, {}, {}", scope, name, mode);
			return !name.contains("red5pro");
		});
		return super.appStart(arg0);

	}

	@Override
	public void appStop(IScope arg0) {
		log.info("appStop");
		super.appStop(arg0);
	}
}
