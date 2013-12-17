package org.beacon.cordova.mqtt;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.json.JSONArray;
import org.json.JSONException;

public class MqttCordovaClient extends CordovaPlugin {
	
	public static final String CONNECT_ACTION = "connect";
	public static final String DISCONNECT_ACTION = "disconnect";
	public static final String SUBSCRIBE_ACTION = "subscribe";
	public static final String UNSUBSCRIBE_ACTION = "unsubscribe";
	public static final String SEND_ACTION = "send";
	public static final String ACKNOWLEDGE_RECEIPT_ACTION = "acknowledgeReceipt";
	
	private MqttClient m_MqttClient;
	
	public MqttCordovaClient() {
	}
	
	/**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArray of arguments for the plugin.
     * @param callbackContext   The callback context used when calling back into JavaScript.
     * @return                  True if the action was valid, false otherwise.
     */
	@Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    	
    	if (action.equals(CONNECT_ACTION)) {
    		cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                	
                	try {
                		
	                	m_MqttClient = new MqttClient("tcp://localhost:1883", "vishal");
	    	        	m_MqttClient.connect();
	    	        	m_MqttClient.publish("/test", new MqttMessage("test from java".getBytes()));
	    	        	m_MqttClient.disconnect();
	    	        	
	                    callbackContext.success(); // Thread-safe.
                	} catch(Exception e) {
                		callbackContext.error(e.getMessage() + " " + e.getStackTrace());
                	}
                }
            });
            return true;
        }
    	callbackContext.error("Invalid Action");
    	return false;
	}
}
