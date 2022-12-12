import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class CharChanger{
    private static Scanner inputReader = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.print("Input file location:");
        writeFile(modifyFile(inputReader.nextLine()));
    }
    private static String modifyFile(String location){
        StringBuilder data = new StringBuilder();
        try {   
            File file = new File(location);
            Scanner fileReader = new Scanner(file);
            while(fileReader.hasNextLine()){
                data.append(fileReader.nextLine());
                data.append("<br></br>");
            }
            fileReader.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        System.out.println("Input processed");
        return data.toString();
    }
    private static void writeFile(String file){
        try {  
            File newFile = new File("output.txt");
            if(newFile.createNewFile()){
                System.out.println("File creation completed");
            }
            else{
                if(newFile.delete()){
                    newFile.createNewFile();
                }
                else{
                    System.out.println("Something went wrong");
                }
            }
            FileWriter writer = new FileWriter("output.txt");
            writer.write(file);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("File modified succesfully");
    }
}