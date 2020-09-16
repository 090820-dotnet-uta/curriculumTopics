using System;

namespace InterviewMochaChallenges
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array1 = new int[] { 1, 2, 3, 4, 5 }; //should return _4
            int[] array2 = { 7, 6, 3, 4, 5 };           //should return _2
            int[] array3 = { 5, 4, 3, 2, 1 };           //should return _0
            int[] array4 = new int[] { };               //should return _0
            int[] array5 = { -5, 4, -300, -2, 1 };      //should return _2


            for (int i = 0; i < array1.Length; i++)
            {
                System.Console.Write($"{array1[i]} ");
            }
            System.Console.WriteLine();
            foreach (int x in array2)
            {
                System.Console.Write($"{x} ");
            }
            System.Console.WriteLine();
            foreach (int x in array3)
            {
                System.Console.Write($"{x} ");
            }
            System.Console.WriteLine();
            foreach (int x in array4)
            {
                System.Console.Write($"{x} ");
            }
            System.Console.WriteLine();
            foreach (int x in array5)
            {
                System.Console.Write($"{x} ");
            }
            System.Console.WriteLine();
            System.Console.WriteLine(IncreasingIndex(array1.Length, array1));
            System.Console.WriteLine(IncreasingIndex(array2.Length, array2));
            System.Console.WriteLine(IncreasingIndex(array3.Length, array3));
            System.Console.WriteLine(IncreasingIndex(array4.Length, array4));
            System.Console.WriteLine(IncreasingIndex(array5.Length, array5));
        }

        public static int IncreasingIndex(int N, int[] Array)
        {
            if (Array.Length == 0)//check for empty array
            { return 0; }
            else
            {
                int result = 0;//record the number of elements matching the 2 conditions
                int sum = Array[0];
                //iterate over the array and check the 2 conditions
                for (int i = 1; i < Array.Length; i++)
                {
                    if (/*Condition1*/Array[i] > Array[i - 1] && (/*Condition2*/sum + Array[i]) > sum)
                    {
                        result++;//increment the number of elements meeting the 2 conditions
                    }
                    sum += Array[i];//get new sum
                }
                return result;//return the result of the for loop.
            }
        }
    }
}

// You are given an array A consisting of N integers.

// Considering the array A, your task is to count the number of occurrences of such indexes i where it satisfies given 2 conditions:
// 1.Element at an index i should be greater than the element at index i -1.
// 2. The sum of elements of array till index i should be greater than the sum of elements till index i - 1.
