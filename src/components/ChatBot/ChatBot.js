import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaRobot, FaTimes, FaPaperPlane, FaMinus, FaExpand } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Ilyess's portfolio assistant. How can I help you? 👋\n\nYou can ask me about:\n1. 💼 Work Experience\n2. 🚀 Projects\n3. 🛠 Skills\n4. 🎓 Education\n5. 📞 Contact",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isMinimized && messages[messages.length - 1]?.sender === "bot") {
      setUnreadCount(prev => prev + 1);
    }
  }, [messages, isMinimized]);

  useEffect(() => {
    if (!isMinimized) {
      setUnreadCount(0);
    }
  }, [isMinimized]);

  const toggleMinimize = (e) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      setUnreadCount(0);
    }
  };

  const quickReplies = [
    { text: "Work Experience 💼", value: "experience" },
    { text: "Projects 🚀", value: "projects" },
    { text: "Skills 🛠", value: "skills" },
    { text: "Education 🎓", value: "education" },
    { text: "Contact 📞", value: "contact" },
  ];

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("experience") || lowerCaseMessage.includes("work")) {
      return {
        text: "Here are my key experiences:\n\n1. 🏢 NODMA Horizon (Current)\n   • PFA Internship - VAT Calculation Software\n   • Duration: 6 months\n   • Tech: .NET, Angular, Docker\n\n2. 🎓 Faculty of Science Semlalia\n   • PFE Internship - Analysis Platform\n   • Duration: 3 months\n   • Tech: Laravel, MySQL\n\n3. 🔬 Faculty of Science and Technology\n   • PFA Internship - Fight Detection System\n   • Duration: 2 months\n   • Tech: Python, VGG16\n\nWould you like to know more about any specific experience?",
        suggestions: ["Tell me about NODMA", "Analysis Platform details", "Fight Detection project"]
      };
    }
    
    if (lowerCaseMessage.includes("project") || lowerCaseMessage.includes("portfolio")) {
      return {
        text: "Here are my main projects:\n\n1. 🚗 CarLease\n   • Car rental platform with microservices\n   • Tech: Spring Boot, Angular\n\n2. 📍 Vehicle Geolocation System\n   • Real-time tracking application\n   • Tech: Spring Boot, React, WebSocket\n\n3. 🅿️ Easy Parking\n   • Smart parking management system\n   • Tech: Spring Boot, React Native\n\n4. 🍽️ Restaurant Management System\n   • Desktop application for restaurant operations\n   • Tech: C#, SQL Server\n\nWhich project would you like to know more about?",
        suggestions: ["CarLease details", "Geolocation System", "Easy Parking", "Restaurant System"]
      };
    }
    
    if (lowerCaseMessage.includes("skill") || lowerCaseMessage.includes("technology")) {
      return {
        text: "My technical skills include:\n\n💻 Frontend:\n• React.js\n• Angular\n• HTML/CSS/JavaScript\n\n⚙️ Backend:\n• Spring Boot\n• .NET\n• Laravel\n\n📱 Mobile:\n• Android Studio\n• React Native\n\n🛠 Tools & DevOps:\n• Git\n• Docker\n• Azure DevOps\n\n📋 Methodologies:\n• Scrum\n• Agile\n\nWould you like more details about any specific skill?",
        suggestions: ["Frontend skills", "Backend technologies", "DevOps tools"]
      };
    }
    
    if (lowerCaseMessage.includes("education") || lowerCaseMessage.includes("study")) {
      return {
        text: "🎓 Education:\n\nI'm currently pursuing engineering in Computer Methods Applied to Business Management (MIAGE) at École Marocaine des Sciences de l'Ingénieur (EMSI).\n\nKey Focus Areas:\n• Software Engineering\n• Business Management\n• Project Management\n• Data Analysis\n\nWould you like to know more about my academic projects or coursework?",
        suggestions: ["Academic projects", "Coursework details", "Technical skills"]
      };
    }
    
    if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("hire")) {
      return {
        text: "📫 You can reach me through:\n\n✉️ Email: hamdooilyass@gmail.com\n🔗 LinkedIn: ilyess-hamdaoui-a637081a6\n💻 GitHub: ilyassoh\n\nFeel free to connect! I'm currently open to new opportunities.",
        suggestions: ["Download Resume", "View Projects", "Technical Skills"]
      };
    }

    return {
      text: "I'm not sure about that. Here are some topics I can help you with:",
      suggestions: quickReplies.map(reply => reply.text)
    };
  };

  const handleSend = (message = inputMessage) => {
    if (message.trim() === "") return;

    // Add user message
    setMessages(prev => [...prev, { text: message, sender: "user" }]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(message);
      setMessages(prev => [...prev, { 
        text: response.text, 
        sender: "bot",
        suggestions: response.suggestions 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (suggestion) => {
    handleSend(suggestion);
  };

  return (
    <>
      <Button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#010048",
          border: "none",
          transition: "transform 0.3s ease",
        }}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
        {!isOpen && unreadCount > 0 && (
          <div className="notification-badge">
            {unreadCount}
          </div>
        )}
      </Button>

      {isOpen && (
        <div
          className="chatbot-container"
          style={{
            position: "fixed",
            bottom: isMinimized ? "90px" : "90px",
            right: "20px",
            width: "350px",
            height: isMinimized ? "60px" : "500px",
            backgroundColor: "rgba(0, 0, 26, 0.95)",
            borderRadius: "15px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            transition: "height 0.3s ease-in-out",
            overflow: "hidden",
          }}
        >
          <div
            className="chatbot-header"
            style={{
              padding: "15px",
              borderBottom: isMinimized ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(45deg, #010048, #0f03b9)",
              borderRadius: "15px 15px 0 0",
              cursor: "pointer",
            }}
            onClick={toggleMinimize}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaRobot size={24} style={{ marginRight: "10px" }} />
              <h5 style={{ margin: 0 }}>Portfolio Assistant</h5>
              {isMinimized && unreadCount > 0 && (
                <span className="unread-count">{unreadCount} new</span>
              )}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                size="sm"
                variant="link"
                onClick={toggleMinimize}
                style={{ color: "white", padding: "0", marginLeft: "auto" }}
              >
                {isMinimized ? <FaExpand size={14} /> : <FaMinus size={14} />}
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div
                className="chatbot-messages"
                style={{
                  flex: 1,
                  overflow: "auto",
                  padding: "15px",
                }}
              >
                {messages.map((message, index) => (
                  <div key={index}>
                    <div
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: message.sender === "user" ? "#010048" : "#1a1a1a",
                          padding: "10px 15px",
                          borderRadius: "15px",
                          maxWidth: "80%",
                          color: "white",
                          whiteSpace: "pre-line",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                      >
                        {message.text}
                      </div>
                    </div>
                    {message.suggestions && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "5px",
                          marginBottom: "10px",
                        }}
                      >
                        {message.suggestions.map((suggestion, i) => (
                          <Button
                            key={i}
                            size="sm"
                            onClick={() => handleQuickReply(suggestion)}
                            style={{
                              backgroundColor: "rgba(1, 0, 72, 0.6)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              borderRadius: "15px",
                              padding: "5px 10px",
                              fontSize: "0.8rem",
                            }}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div
                className="chatbot-input"
                style={{
                  padding: "15px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  background: "rgba(26, 26, 26, 0.5)",
                  borderRadius: "0 0 15px 15px",
                }}
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    marginRight: "10px",
                  }}
                />
                <Button
                  onClick={() => handleSend()}
                  style={{
                    backgroundColor: "#010048",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaPaperPlane size={16} />
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot; 