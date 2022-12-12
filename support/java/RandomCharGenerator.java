package support.java;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.Math;
import java.util.Scanner;
public class RandomCharGenerator {
    private static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println("How many characters would you like to make?");
        try {
            randomify(Integer.valueOf(scan.nextLine()));
        } catch (NumberFormatException | IOException e) {
            e.printStackTrace();
        }
    }

    private static void randomify(int amount) throws IOException{
        File export = new File("randomChars.txt");
        if(export.createNewFile()){
            System.out.println("File created.");
        }
        else{
            if(export.delete()){
                export.createNewFile();
            }
            else{
                System.out.println("File could not be created.");
            }
        }

        FileWriter writeToExport = new FileWriter("randomChars.txt");
        for(int n = 0; n < amount; n++){
            int ascii = (int) Math.round(Math.random() * 126);
            writeToExport.write((char) ascii);
        }

        writeToExport.close();
    }
}
