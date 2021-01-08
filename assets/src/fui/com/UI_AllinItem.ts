/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AllinItem extends fgui.GComponent {

	public m_pic:fgui.GLoader;
	public static URL:string = "ui://cu1uq9ugqgkvgq";

	public static createInstance():UI_AllinItem {
		return <UI_AllinItem>(fgui.UIPackage.createObject("com", "AllinItem"));
	}

	protected onConstruct():void {
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
	}
}