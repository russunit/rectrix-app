import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.StringTokenizer;

public class ProfileServer 
{
	//private ServerSocket server;
	//private Socket socket;
	private ProfileDB profileDB;
	
	public String stringCommand(String inString)
	{
		StringTokenizer st = new StringTokenizer(inString, "@");
		//this will be the string hopefully received from our app via an HTML request.
		
		//string command formats:
		//
		//login@username@password, returns profileString, "alreadyloggedin" or "notfound"
		//logout@username, returns "OK" or "notloggedin"
		//update@profileString, returns "OK" or "notloggedin"
		//signup@profileString, returns "OK or "nameunavailable"
		//
		
		switch(st.nextToken())
		{
			case "login":
				return login(st.nextToken(), st.nextToken());
			case "logout":
				if(logout(st.nextToken()))
					return "OK";
				else
					return "notloggedin";
			case "update":
				if(update(st.nextToken()))
					return "OK";
				else
					return "notloggedin";
			case "signup":
				if(signup(st.nextToken()))
					return "OK";
				else
					return "nameunavailable";
			default:
				return "COMMAND STRING ERROR.";
		}
	}
	
	public String login(String user, String password)
	{
		//returns profileString if logged in successfully
		for(int x = 0; x < profileDB.getNumProfiles(); x++)
		{
			if(profileDB.getProfiles().get(x).getUserName().equals(user))
				if(profileDB.getProfiles().get(x).getPassword().equals(password))
				{
					for(int y = 0; y < profileDB.getNumLoggedInUsers(); y++)
						if(profileDB.getLoggedInUserNames().get(y).equals(user))
							return "alreadyloggedin";
					profileDB.logInUser(user);
					return "OK";
				}
		}
		return "notfound";
	}
	
	public boolean logout(String user)
	{
		//returns true if logged out successfully
		for(int y = 0; y < profileDB.getNumLoggedInUsers(); y++)
		{
			if(profileDB.getLoggedInUserNames().get(y).equals(user))
			{
				profileDB.logOutUser(y);
				return true;
			}
		}
		return false;
	}
	
	public boolean update(String profileString)
	{
		//updates user profile from string containing all userprofile info (profileString)
		//return true if updated successfully
		return profileDB.updateUserProfileFromString(profileString);
	}
	
	public boolean signup(String profileString)
	{
		//adds user profile from string containing all userprofile info (profileString)
		//return true if signed up successfully
		return profileDB.addUserProfileFromString(profileString);
	}
	
	public ProfileServer() throws UnsupportedEncodingException, IOException
	{
		profileDB = new ProfileDB();
		
		final ServerSocket server = new ServerSocket(7777);
		System.out.println("Waiting for connection on port 7777 ....");
		
		while(true)
		{
			try(Socket clientSocket = server.accept())
			{
				System.out.println("connected.");
				//InputStreamReader isr = new InputStreamReader(clientSocket.getInputStream());
				//BufferedReader reader = new BufferedReader(isr);
				InputStream stream = clientSocket.getInputStream();
				String text = "";
				byte[] bytes = null;
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                try 
                {
                	int read = stream.read();
                	while(read > 0 && !clientSocket.isInputShutdown() && stream.available() != 0) 
                	{
                		byteArrayOutputStream.write(read);
                		read = stream.read();
                		bytes = byteArrayOutputStream.toByteArray();
                	}
                	text = new String(bytes, "UTF-8");
                	
                	//
                	System.out.println("payload:\n"+text+"\n");
                	//
                }
                catch(Exception e)
                {
                	e.printStackTrace();
                }
                StringTokenizer tok = new StringTokenizer(text, "\"");
                String header = tok.nextToken();
                String commandString = tok.nextToken();
                String response = "HTTP/1.1 200 OK\r\n\r\n" + stringCommand(commandString);
				clientSocket.getOutputStream().write(response.getBytes("UTF-8"));
				
				//
            	System.out.println("commandString:\n"+commandString+"\n");
            	//
				
				//
				System.out.println("response:\n"+response+"\n");
                //
				
                //String response = "HTTP/1.1 200 OK\r\n\r\n" + stringCommand(commandString);
				//clientSocket.getOutputStream().write(response.getBytes("UTF-8"));
                

                                
				//the following is used for testing and will be replaced by the parsing
				//and methods described below.
				//String line = reader.readLine();
				//String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + line;
				//while(!line.isEmpty())
				//{
					//this prints the metadata about the HTTP request, but not the body(payload)
					//TODO get the BODY of the HTTP request as a string, 
					//then parse the string, extracting the commandString generated by the app,
					//(this commandString will be the payload/body), then call:
					//
					//String response = "HTTP/1.1 200 OK\r\n\r\n" + stringCommand(commandString);
					//clientSocket.getOutputStream().write(response.getBytes("UTF-8"));
					
				//	System.out.println(line);
				//	line = reader.readLine();
				//	httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + line;
				}
				
			}
	}
	
	public static void main(String[] args) throws Exception
	{
		ProfileServer profileServer = new ProfileServer();
	}
	
}
