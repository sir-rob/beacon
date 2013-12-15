package org.saurabh.MQTTJavaPlugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.MqttPersistenceException;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;

public class MQTTJavaPlugin extends CordovaPlugin{

	//actions that can be called from JavaScript
	public static final String ACTION_CONNECT_MQTT = "connect";
	public static final String ACTION_DISCONNECT_MQTT = "disconnect";
	public static final String ACTION_PUBLISH_MQTT = "publish";
	
	private String myServer = "localhost";
	private int myPort = 1883;
	private String myMQTTServerURI = "tcp://localhost:1883";
	private String myUserName = "JavaClientDefaultUser";
	private MqttClient mqttCt = null;
	
	
	/////////////////Working here... using guide: 
	//http://devgirl.org/2013/09/17/how-to-write-a-phonegap-3-0-plugin-for-android/?utm_source=buffer&utm_campaign=Buffer&utm_content=bufferf6d4c&utm_medium=twitter
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {
		    if (ACTION_CONNECT_MQTT.equals(action)) { 
		             JSONObject arg_object = args.getJSONObject(0);
/*		             Intent calIntent = new Intent(Intent.ACTION_EDIT)
		        .setType("vnd.android.cursor.item/event")
		        .putExtra("beginTime", arg_object.getLong("startTimeMillis"))
		        .putExtra("endTime", arg_object.getLong("endTimeMillis"))
		        .putExtra("title", arg_object.getString("title"))
		        .putExtra("description", arg_object.getString("description"))
		        .putExtra("eventLocation", arg_object.getString("eventLocation"));
		 
		       this.cordova.getActivity().startActivity(calIntent);*/
		       

		    	setMqttValues(arg_object.getString("server"), arg_object.getInt("port"), arg_object.getString("username"));
		        //setMqttValues("192.168.2.110", 1883, "saurabh");
		    	connect();
		    	publish("I came here from JavaScript to JAVA call running on Samsung s3", "/test");
		    	disconnect();
		    	callbackContext.success();
		    	return true;
		    }
		    callbackContext.error("Invalid action");
		    return false;
		} catch(Exception e) {
		    System.err.println("Exception: " + e.getMessage());
		    callbackContext.error(e.getMessage());
		    return false;
		}
	}
	
	/**
	 * 
	 * @param server
	 * @param port
	 * @param userName
	 */
	public void setMqttValues(String server, int port, String userName) {
		myServer = server;
		myPort = port;
		myMQTTServerURI = "tcp://" + myServer + ":" + myPort ;
		myUserName = userName;
	}
	
	/**
	 * Function to make the mqtt connection
	 * @throws MqttException
	 */
	public void connect() throws MqttException{
		MemoryPersistence MP = new MemoryPersistence();
		mqttCt = new MqttClient(myMQTTServerURI, myUserName, MP);
		mqttCt.connect();
	}
	
	/**
	 * Function to break the mqtt connection
	 * @throws MqttException
	 */
	public void disconnect() throws MqttException{
		if (mqttCt.isConnected()){
			mqttCt.disconnect();
		}
	}
	
	/**
	 * Function to publish message
	 * @param strPayload
	 * @param myTopic
	 * @throws MqttPersistenceException
	 * @throws MqttException
	 */
	public void publish(String myMessage, String myTopic) throws MqttPersistenceException, MqttException{
		byte[] myPayload = myMessage.getBytes();
		MqttMessage myMqttMessage = new MqttMessage(myPayload);
		mqttCt.publish(myTopic, myMqttMessage);
	}
}
