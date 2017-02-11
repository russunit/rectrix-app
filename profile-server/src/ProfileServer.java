import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;


public class ProfileServer 
{
	//private ServerSocket server;
	//private Socket socket;
	private ProfileDB profileDB;
	
	public boolean login(String user, String password)
	{
		//returns true if logged in successfully
		return false;
	}
	
	public boolean logout(String user)
	{
		//return true if logged out successfully
		return false;
	}
	
	public boolean update(UserProfile user)
	{
		//return true if updated successfully
		return false;
	}
	
	public boolean signup(UserProfile user)
	{
		//return true if signed up successfully
		return false;
	}
	
	public static void main(String[] args) throws Exception
	{
		final ServerSocket server = new ServerSocket(7777);
		System.out.println("Waiting for connection on port 7777 ....");
		
		while(true)
		{
			try(Socket clientSocket = server.accept())
			{
				System.out.println("connected.");
				InputStreamReader isr = new InputStreamReader(clientSocket.getInputStream());
				BufferedReader reader = new BufferedReader(isr);
				String line = reader.readLine();
				String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + line;
				while(!line.isEmpty())
				{
					//clientSocket.getOutputStream().write(line.getBytes("UTF-8"));
					System.out.println(line);
					line = reader.readLine();
					httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + line;
				}
			}
		}
	}
	
}
