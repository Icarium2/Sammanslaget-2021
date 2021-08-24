using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CustomButton : MonoBehaviour
{

    SpriteRenderer button;

    private void Awake()
    {
        button = GetComponent<SpriteRenderer>();
    }

    void OnMouseDown()
    {
        button.color = Color.magenta;
    }


    void OnMouseOver()
    {
        button.color = Color.white;

        if (Input.GetMouseButton(0))
        {
            button.color = Color.magenta;
        }
            
    }


    void OnMouseExit()
    {
        button.color = Color.grey;
    }

}
